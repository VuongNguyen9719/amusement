import { cloneElement, isValidElement } from 'react';

const SvgIcon = ({ icon, width, height = width, ...props }) => {
    if (!isValidElement(icon)) return null;

    return cloneElement(icon, {
        ...(width ? { width } : {}),
        ...(height ? { height } : {}),
        ...props,
    });
};
export default SvgIcon;