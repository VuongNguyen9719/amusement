import React, { useEffect, useMemo, useState } from 'react';
import PropTypes from 'prop-types';
import { useLocation } from 'react-router-dom';
import groupItem from '~common/constants/groupItem';
import BoxAvatar from './BoxAvatar';

const Headers = props => {
    const location = useLocation();
    const { pathname } = location;
    const [menuActive, setMenuActive] = useState();

    const allMenuHasPath = useMemo(() => {
        let result = [];
        if (groupItem && groupItem.length > 0) {
            let fnRecursive = (groupItem) => {
                if (groupItem && groupItem.length > 0) {
                    groupItem.forEach(item => {
                        const { path, items } = item
                        if (path && path.length > 0) {
                            result.push(item)
                        }
                        if (items && items.length > 0) {
                            fnRecursive(items)
                        }
                    })
                }
            }
            fnRecursive(groupItem)
        }
        return result;
    }, [])

    useEffect(() => {
        const menuMatch = allMenuHasPath && allMenuHasPath.length > 0 && allMenuHasPath.find(item => item.path === pathname);
        setMenuActive(menuMatch);
        if (menuMatch) {
            const { name } = menuMatch;
            document.title = name;
        }
    }, [pathname])

    return (
        <header
            className='flex justify-between px-[20px] py-[16px] bg-[#fff] '
        >
            <p className='text-lg not-italic font-medium leading-7 text-[#364152]'>{menuActive && menuActive.name || ""}</p>
            <BoxAvatar />
        </header>
    );
};

Headers.propTypes = {

};

export default Headers;