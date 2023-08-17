import React from 'react';

const IconPreview = ({
    width = 20,
    height = 20,
    fill = "#697586"
}) => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox={`0 0 ${width} ${height}`} fill="none">
            <path d="M9.8576 7.12424L12.5173 9.72064V9.58918C12.5173 8.93544 12.2521 8.30847 11.7801 7.8462C11.308 7.38394 10.6678 7.12424 10.0002 7.12424H9.8576ZM6.24981 7.78156L7.55029 9.05511C7.50834 9.22765 7.48317 9.4002 7.48317 9.58918C7.48317 10.2429 7.74836 10.8699 8.2204 11.3322C8.69244 11.7944 9.33267 12.0541 10.0002 12.0541C10.1848 12.0541 10.3694 12.0295 10.5456 11.9884L11.8461 13.2619C11.2839 13.5331 10.6631 13.6974 10.0002 13.6974C8.88762 13.6974 7.82058 13.2646 7.03384 12.4941C6.24711 11.7237 5.80512 10.6787 5.80512 9.58918C5.80512 8.94008 5.97293 8.33206 6.24981 7.78156ZM2.14279 2.71611C1.84855 3.00427 1.84855 3.47145 2.14279 3.7596L3.90054 5.48095C2.60064 6.4839 1.55965 7.77662 0.895651 9.29109C0.812227 9.48137 0.812662 9.69689 0.896683 9.88691C2.42175 13.336 5.9215 15.7515 10.0002 15.7515C11.3007 15.7515 12.5425 15.505 13.6751 15.0613L14.0359 15.4064L15.9531 17.2839C16.2473 17.572 16.7244 17.572 17.0187 17.2839C17.3129 16.9957 17.3129 16.5285 17.0187 16.2404L3.20835 2.71611C2.9141 2.42796 2.43704 2.42796 2.14279 2.71611ZM10.0002 5.48095C11.1128 5.48095 12.1799 5.91378 12.9666 6.68422C13.7534 7.45466 14.1953 8.49961 14.1953 9.58918C14.1953 10.115 14.0863 10.6244 13.8933 11.0846L16.3516 13.492C17.5275 12.5324 18.4836 11.2931 19.1037 9.88792C19.1879 9.69728 19.1877 9.48108 19.1034 9.29051C17.5781 5.84191 14.0786 3.42684 10.0002 3.42684C8.8256 3.42684 7.70131 3.63225 6.64415 4.00199L8.46482 5.76853C8.94307 5.58776 9.45487 5.48095 10.0002 5.48095Z" fill={fill}/>
        </svg>
    );
};

export default IconPreview;