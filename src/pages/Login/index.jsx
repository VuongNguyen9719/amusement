import React from 'react';
import PropTypes from 'prop-types';

import Form from './Form';

import IconWrapper from '~HOC/IconWrapper'
import SvgIcon from '~formControls/SvgIcon.jsx'

const Login = props => {
    return (
        <div
            className="w-[100vw] h-[100vh] bg-image-login font-custom flex justify-center"
        >
            <div className='flex flex-col mt-[120px] gap-y-[40px] items-center'>
                <div
                    className='flex flex-col justify-center gap-y-[16px]'
                >
                    <div
                        className='flex gap-x-[12px] items-center justify-center'
                    >
                        <IconWrapper className=' bg-[#EEF2FF] rounded' width={44}>
                            <SvgIcon icon={<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M6.2068 1.96186C5.10428 3.08525 5.10428 4.9031 6.22722 6.02649L8.67727 8.47752C10.9844 10.7856 10.9844 14.5438 8.67727 16.8519L4.18551 12.3583C3.03194 11.2043 2.45005 9.68261 2.45005 8.17114C2.45005 6.65967 3.03194 5.13799 4.18551 3.98396L6.17617 1.99249C6.18638 1.98228 6.19659 1.97207 6.2068 1.96186Z" fill="#4F46E5" stroke="#4F46E5" strokeWidth="2" strokeMiterlimit="10" />
                                <path d="M8.16664 7.96584L6.22701 6.02544C5.10407 4.90205 5.09386 3.09441 6.2066 1.96081C7.30912 0.878268 9.06499 0.898692 10.1573 1.99144C10.7086 2.54293 10.9842 3.26803 10.9842 3.98291C10.9842 4.6978 10.7086 5.42289 10.1573 5.97438L9.69792 6.43394" stroke="#4F46E5" strokeWidth="2" strokeMiterlimit="10" />
                                <path d="M17.7932 22.029C18.8958 20.9056 18.8958 19.0878 17.7728 17.9644L15.3228 15.5133C13.0156 13.2053 13.0156 9.44704 15.3228 7.13898L19.8145 11.6325C20.9681 12.7866 21.55 14.3083 21.55 15.8197C21.55 17.3312 20.9681 18.8529 19.8145 20.0069L17.8239 21.9984C17.8034 22.0188 17.7932 22.029 17.7932 22.029Z" fill="#4F46E5" stroke="#4F46E5" strokeWidth="2" strokeMiterlimit="10" />
                                <path d="M15.8224 16.0342L17.762 17.9746C18.885 19.098 18.8952 20.9056 17.7824 22.0392C16.6799 23.1217 14.924 23.1013 13.8317 22.0086C13.2805 21.4571 13.0048 20.732 13.0048 20.0171C13.0048 19.3022 13.2805 18.5771 13.8317 18.0256L14.3013 17.5558" stroke="#4F46E5" strokeWidth="2" strokeMiterlimit="10" />
                            </svg>
                            } className='w-[24px] h-[24px]' />
                        </IconWrapper>
                        <p className=' text-[#FFF]'>DreamLand CMS</p>
                    </div>
                    <p className='text-[#fff] text-[22px] font-normal'>Phần mềm quản lý và theo dõi khu vui chơi giải trí hàng đầu Việt Nam</p>
                </div>
                <Form />
            </div>
        </div>
    );
};

Login.propTypes = {

};

export default Login;