import React from 'react';
import classNames from 'classnames';

function IconWrapper({
    className,
    onClick,
    width = 20,
    height = width,
    tooltip,
    tooltipPlace,
    children,
    ...props
}) {
    return (
        <div
            style={{ width: width + 'px', height: height + 'px' }}
            data-tooltip-minisite={tooltip}
            tooltip-place={tooltipPlace}
            className={classNames(
                'flex justify-center items-center',
                className,
                onClick && 'cursor-pointer'
            )}
            onClick={onClick}
            {...props}
        >
            {children}
        </div>
    );
}

export default IconWrapper;
