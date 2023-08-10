import React, { useState } from 'react';

import enumGroupSidebar from '@common/constants/enumGroupSidebar';
import Statistic from '@assets/svg/Statistic';
import IconFilm from '@assets/svg/IconFilm';
import WaterPark from '@assets/svg/WaterPark';
import Voucher from '@assets/svg/Voucher';
import Account from '@assets/svg/Account';
import User from '@assets/svg/User';
import Client from '@assets/svg/Client';
import LogOut from '@assets/svg/LogOut';

import Item from './Item';
import MultiItem from './MultiItem';
import VerifiedUser from '@assets/svg/VerifiedUser';


const Main = () => {
    const groupItem = [
        {
            type: enumGroupSidebar.Single,
            name: 'Thống kê tổng quan',
            icon: Statistic,
            test: ({ width = 20, height = 20, fill = '#697586' }) => {
                return (
                    <svg width={width} height={height} viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12.4579 9.14954H17.5299C18.0278 9.14954 18.4204 8.71354 18.3165 8.22169C17.627 4.95572 15.0777 2.38057 11.8445 1.68402C11.3576 1.57912 10.926 1.97567 10.926 2.47858V7.60201C11.6414 7.8656 12.197 8.42679 12.4579 9.14954ZM12.6095 3.69066C14.293 4.3879 15.6398 5.74837 16.33 7.44896H13.4428C13.2071 7.13435 12.9209 6.84525 12.6095 6.60716V3.69066ZM1.66663 9.99984C1.66663 14.0897 4.52238 17.5003 8.3243 18.3164C8.81111 18.4208 9.24244 18.0243 9.24244 17.5216V12.3977C8.266 12.0405 7.55892 11.1052 7.55892 9.99984C7.55892 8.89445 8.266 7.95913 9.24244 7.60201V2.47805C9.24244 1.97533 8.81111 1.57884 8.3243 1.68333C4.52238 2.49938 1.66663 5.91001 1.66663 9.99984ZM7.55892 3.69066V6.61567C6.52356 7.39794 5.87541 8.64787 5.87541 9.99984C5.87541 11.3518 6.52356 12.6017 7.55892 13.3925V16.3175C5.06732 15.3057 3.35014 12.8483 3.35014 9.99984C3.35014 7.15135 5.06732 4.694 7.55892 3.69066ZM10.926 12.3977V17.5211C10.926 18.024 11.3576 18.4206 11.8445 18.3157C15.0777 17.6191 17.627 15.044 18.3165 11.778C18.4204 11.2861 18.0278 10.8501 17.5299 10.8501H12.4579C12.197 11.5729 11.6414 12.1341 10.926 12.3977ZM12.6095 13.3925C12.9209 13.1544 13.2071 12.8738 13.4428 12.5507H16.33C15.6398 14.2513 14.293 15.6118 12.6095 16.309V13.3925Z" fill={fill} />
                    </svg>

                )
            },
            path: '/'
        },
        {
            type: enumGroupSidebar.Multi,
            name: 'Quản lý dịch vụ',
            items: [
                {
                    name: 'Rạp chiếu phim',
                    icon: IconFilm,
                    pathChild: ['/manage-movie-showtimes', '/upcoming-movie', '/additional-services', '/theater-manager'],
                    items: [
                        {
                            name: 'Quản lý lịch chiếu phhim',
                            path: '/manage-movie-showtimes',
                        },
                        {
                            name: 'Phim sắp chiếu',
                            path: '/upcoming-movie',
                        },
                        {
                            name: 'Dịch vụ bổ trợ',
                            path: '/additional-services',
                        },
                        {
                            name: 'Quản lý rạp chiếu',
                            path: '/theater-manager',
                        },
                    ]
                },
                {
                    name: 'Trò chơi mạo hiểm',
                    icon: VerifiedUser,
                    pathChild: ['/manage-game', '/services-game'],
                    items: [
                        {
                            name: 'Quản lý trò chơi',
                            path: '/manage-game',
                        },
                        {
                            name: 'dịch vụ bổ trợ',
                            path: '/services-game',
                        },
                    ]
                },
                {
                    name: 'Công viên nước ',
                    icon: WaterPark,
                    pathChild: ['/manage-game-waterpark', '/services-game-waterpark'],
                    items: [
                        {
                            name: 'Quản lý trò chơi',
                            path: '/manage-game-waterpark',
                        },
                        {
                            name: 'dịch vụ bổ trợ',
                            path: '/services-game-waterpark',
                        },
                    ]
                }
            ]
        },
        {
            type: enumGroupSidebar.Multi,
            name: 'Khác',
            items: [
                {
                    name: 'Sự kiện và Voucher',
                    icon: Voucher,
                    path: '/event-and-voucher',
                },
                {
                    name: 'Quản lý tài khoản',
                    icon: Account,
                    pathChild: ['/manage-account', '//manage-permissison'],
                    items: [
                        {
                            name: 'Quản lý tài khoản',
                            path: '/manage-account',
                        },
                        {
                            name: 'Quản lý quyền',
                            path: '/manage-permissison',
                        },
                    ]
                },
                {
                    name: 'Quản lý nhân sự',
                    icon: User,
                    path: '/manage-user',
                },
                {
                    name: 'Thông tin khách hàng',
                    icon: Client,
                    path: '/info-client',
                }
            ]
        },
        {
            type: enumGroupSidebar.Single,
            name: 'Đăng xuất',
            icon: LogOut,
            path: '/login',
        },
    ]

    return (
        <div className='flex flex-col gap-y-[28px]'>
            {
                groupItem.map((grItem, index) => {
                    const { type, ...res } = grItem;
                    if (type == enumGroupSidebar.Single) {
                        return (
                            <Item {...res} key={index} />
                        )
                    }
                    return (
                        <MultiItem
                            key={index}
                            {...res}
                        />
                    )
                })
            }
        </div>
    );
};

export default Main;