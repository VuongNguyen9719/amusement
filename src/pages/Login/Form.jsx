import React, { useEffect, useRef, useState } from 'react';
import Input from '~formControls/Input';
import Loading from '~formControls/Loading';
import Checkbox from '~formControls/Checkbox';
import Button from '~formControls/Button';
import apiLogin from "~api/login";
import { toast } from 'react-toastify';
import tokenServices from "~common/services/token";

import helper from '~helper'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRepeat } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';

const Form = props => {
    const userInfoCache = localStorage.getItem('userInfo');
    let userInfo = JSON.parse(userInfoCache)
    const refImg = useRef()
    const [isLoading, setLoading] = useState(false);
    const [userName, setUserName] = useState(userInfo?.userName);
    const [userPassword, setUserPassword] = useState(userInfo?.userPassword);
    const [captcha, setCapcha] = useState('');
    const [isRememberPass, setRememberPass] = useState(userInfo ? true : false);
    const [countGetCapcha, setCountGetCapcha] = useState(0);
    
    const navigate = useNavigate();

    useEffect(() => {
        const makeApiRequest = async () => {
            try {
                const response = await apiLogin.getCapcha();
                refImg.current.src = response
            } catch (error) {
                toast.error("Lấy dữ liệu captcha không thành công!")
            }
            setLoading(false)
        }
        makeApiRequest()
    }, [countGetCapcha])

    const checkValid = () => {
        toast.dismiss();
        if (isLoading) {
            toast.warn('Vui lòng chờ trong giây lát!');
            return false;
        }

        if (!userName) {
            toast.warn('Vui lòng nhập Email!');
            return false
        }

        const isValidEmail = helper.checkIsValidEmail(userName);
        if (!isValidEmail) {
            toast.warn('Email bạn nhập không hợp lệ!');
            return false
        }

        if (!userPassword) {
            toast.warn('Vui lòng nhập mật khẩu!');
            return false
        }

        if (!captcha) {
            toast.warn('Vui lòng captcha!');
            return false
        }

        return true
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const isValid = checkValid()

        if (!isValid) {
            return
        }

        setLoading(true);
        if (isRememberPass) {
            localStorage.setItem("userInfo", JSON.stringify({
                userName,
                userPassword
            }))
        } else {
            localStorage.removeItem("userInfo")
        }

        const makeApiRequest = async () => {
            try {
                const response = await apiLogin.login({
                    email: userName,
                    password: userPassword,
                    captcha,
                })
                if (!response) {
                    throw new Error('')
                }
                toast.success("Đăng nhập thành công!")
                tokenServices.setToken(response);
                navigate("/");
            } catch (error) {
                toast.error(`Đăng nhập không thành công!. Lỗi: ${error}`)
            }
            setLoading(false)
        }
        makeApiRequest()
    }

    const setReloadCapcha = (e) => {
        e.preventDefault();
        toast.dismiss();
        if (isLoading) {
            toast.warn('Vui lòng chờ trong giây lát!');
            return false;
        }
        setLoading(true)
        setCountGetCapcha(prev => prev + 1)
    }

    return (
        <form
            className='bg-[#fff] p-[24px] flex flex-col justify-center items-center rounded-[20px] w-[440px]'
            onSubmit={handleSubmit}
        >
            {isLoading && <Loading />}
            <div
                className='flex flex-col gap-y-[24px] w-full h-full'
            >
                <p className='text-center font-semibold	text-[#6366F1] text-[20px] leading-[28px]'>Đăng nhập</p>
                <div
                    className='flex flex-col gap-y-[16px]'
                >
                    <div>
                        <label className='text-[#4B5565] text-[14px] leading-[20px] font-normal'>Email</label>
                        <Input
                            className="border-normal"
                            required
                            value={userName}
                            onChange={setUserName}
                        />
                    </div>
                    <div>
                        <label className='text-[#4B5565] text-[14px] leading-[20px] font-normal'>
                            Mật khẩu
                        </label>
                        <Input
                            className="border-normal"
                            required
                            type="password"
                            value={userPassword}
                            onChange={setUserPassword}
                        />
                    </div>
                    <div
                        className='flex justify-between'
                    >
                        <Checkbox
                            labelText='Ghi nhớ tài khoản'
                            className="border-normal"
                            checked={isRememberPass}
                            defaultChecked={isRememberPass}
                            onChange={setRememberPass}
                        />

                        {/* <p className='text-[#6366F1] text-[14px] cursor-pointer'>Quên mật khẩu?</p> */}
                    </div>
                    <div
                        className='flex justify-between'
                    >
                        <div className=' w-[55%]'>
                            <Input
                                className="border-normal"
                                required
                                value={captcha}
                                onChange={setCapcha}
                            />
                        </div>
                        <div
                            className='group  bg-captcha w-[40%] h-[35px] font-semibold text-[26px] text-[#61A0F2] italic flex justify-center items-center relative '
                        >
                            <img className='w-full h-full object-fill' ref={refImg} />
                            <div className='absolute transition-opacity opacity-0 group-hover:opacity-100 top-0 right-1 w-full h-full bg-[rgba(0,0,0,0.5)] flex items-center justify-center'>
                                <div
                                    className='w-[26px] h-[26px] cursor-pointer flex items-center justify-center'
                                    onClick={setReloadCapcha}
                                >
                                    <FontAwesomeIcon icon={faRepeat} />
                                </div>
                            </div>
                        </div>
                    </div>

                    <div>
                        <Button
                            type="submit"
                            text='Đăng nhập'
                            onClick={handleSubmit}
                            className="w-full py-[12px] flex justify-center items-center text-[#FFFFFF] bg-[#4F46E5] rounded-[8px] shadow-xs cursor-pointer"
                        />
                    </div>
                    {/* <div
                        className='flex justify-center gap-x-[4px]'
                    >
                        <p className='text-[#4B5565] text-[14px] cursor-pointer' >
                            Bạn chưa có tài khoản?
                        </p>
                        <p className='text-[#4F46E5] text-[14px] cursor-pointer'>Đăng ký tài khoản</p>
                    </div> */}
                </div>
            </div>
        </form>
    );
};

Form.propTypes = {

};

export default Form;