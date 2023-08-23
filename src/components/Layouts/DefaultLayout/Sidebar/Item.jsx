import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

import IconWrapper from '~HOC/IconWrapper'
import SvgIcon from '~formControls/SvgIcon.jsx'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons';
import tokenServices from '../../../../common/services/token';

function Item(props) {


    const { name, icon: Icon, path, items, onClick, isShowDetail, pathChild, onActive } = props;
    const location = useLocation();
    const { pathname } = location;
    const isActive = pathname === path || (pathChild && pathChild.length > 0 && pathChild.indexOf(pathname) != -1);
    const [color, setColor] = useState(isActive ? '#4F46E5' : '#697586');
    const [clsBg, setClsBg] = useState('bg-[#fff]');

    useEffect(() => {
        if (isActive) {
            setClsBg('bg-[#E3E8EF]')
            setColor('#4F46E5')
            if (typeof onActive == 'function') {
                onActive()
            }
        } else {
            setClsBg('bg-[#fff]')
            setColor('#697586')
        }
    }, [isActive])

    const onToggleItem = (e) => {
        
        if (props.path === '/login') {
            tokenServices.setToken();
        }

        if (items && items.length > 0) {
            onClick && typeof onClick == 'function' && onClick()
        }
    }

    return (
        <Link
            to={path}
            className={`flex items-center gap-x-[12px] px-[12px] py-[14px] rounded-[8px] cursor-pointer ${clsBg}`}
            onMouseEnter={() => {
                if (!isActive) {
                    setColor("#6366F1")
                    setClsBg('bg-[#F8FAFC]')
                }
            }}
            onMouseLeave={() => {
                if (!isActive) {
                    setColor("#697586")
                    setClsBg('bg-[#fff]')
                }
            }}
            onClick={onToggleItem}
        >
            <IconWrapper >
                <SvgIcon icon={<Icon fill={color} />} />
            </IconWrapper>
            <p className={`text-[${color}] text-sm not-italic font-medium leading-5 flex-1`}>{name}</p>
            {
                items && items.length > 0 &&
                <FontAwesomeIcon icon={isShowDetail ? faChevronUp : faChevronDown} size="sm" style={{ color: color }} />
            }
        </Link>
    );
}

export default Item;