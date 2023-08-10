import React, { useEffect, useState } from 'react';
import classNames from 'classnames';
import { useLocation } from 'react-router-dom';

import { Link } from "react-router-dom";

function DetailItem(props) {
    const { name, path } = props;
    const location = useLocation();
    const { pathname } = location;
    const isActive = pathname === path;
    const [color, setColor] = useState(isActive ? '#4F46E5' : '#697586');
    const [clsBg, setClsBg] = useState('bg-[#CDD5DF]');

    useEffect(() => {
        if (isActive) {
            setClsBg('bg-[#4F46E5]')
            setColor('#4F46E5')
            
        } else {
            setClsBg('bg-[#CDD5DF]')
            setColor('#697586')
        }
    }, [isActive])
    return (
        <Link
            className={classNames(
                'flex gap-x-[12px] pl-[42px] py-[10px] items-center cursor-pointer',
            )}
            to={path}
            onMouseEnter={() => {
                if (!isActive) {
                    setColor("#6366F1")
                    setClsBg('bg-[#6366F1]')
                }
            }}
            onMouseLeave={() => {
                if (!isActive) {
                    setColor("#697586")
                    setClsBg('bg-[#CDD5DF]')
                }
            }}
        >
            <div
                className={classNames(
                    'w-[6px] h-[6px] rounded-[50%]',
                    clsBg
                )}
            ></div>
            <p className={classNames(
                'text-sm not-italic font-medium leading-5',
                `text-[${color}] `
            )}

            >{name}</p>
        </Link>
    );
}

export default DetailItem;