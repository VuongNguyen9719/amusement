import React from 'react';
import Input from '~common/formControls/Input';
import Checkbox from '~formControls/Checkbox';
import Button from '~formControls/Button';

const Form = props => {
    return (
        <div
            className='bg-[#fff] p-[24px] flex flex-col justify-center items-center rounded-[20px] w-[440px]'
        >
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
                        />
                    </div>
                    <div
                        className='flex justify-between'
                    >
                        <Checkbox
                            labelText='Ghi nhớ tài khoản'
                            className="border-normal"
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
                            />
                        </div>
                        <div
                            className='bg-capcha w-[40%] h-[35px] font-semibold text-[26px] text-[#61A0F2] italic flex justify-center items-center'
                        >
                            123123
                        </div>
                    </div>

                    <div>
                        <Button
                            text='Đăng nhập' onClick={props.onClose}
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
        </div>
    );
};

Form.propTypes = {

};

export default Form;