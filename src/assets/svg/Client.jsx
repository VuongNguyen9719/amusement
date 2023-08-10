export default function ({ width = 20, height = 20, fill = "#697586" }) {
    return (
        <svg width={width} height={height} viewBox={`0 0 ${width} ${height}`} fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M16.9445 3.33398H3.05558C2.29863 3.36361 1.69446 4.00806 1.66669 4.81547V15.1858C1.69446 15.9932 2.29863 16.6377 3.05558 16.6673H16.9445C17.7014 16.6377 18.3056 15.9932 18.3334 15.1858V4.81547C18.3206 4.42689 18.1701 4.05794 17.9124 3.78301C17.6546 3.50808 17.3088 3.34762 16.9445 3.33398ZM16.9445 15.1858H3.05558V4.81547H16.9445V15.1858ZM11.3889 13.7044V12.7784C11.3889 11.5488 9.06947 10.9266 7.91669 10.9266C6.76391 10.9266 4.44446 11.5488 4.44446 12.7784V13.7044H11.3889ZM7.91669 6.29695C7.45624 6.29695 7.01466 6.49205 6.68907 6.83934C6.36349 7.18663 6.18058 7.65766 6.18058 8.1488C6.18058 8.39199 6.22548 8.6328 6.31273 8.85747C6.39998 9.08215 6.52786 9.2863 6.68907 9.45826C7.01466 9.80555 7.45624 10.0007 7.91669 10.0007C8.14468 10.0007 8.37043 9.95275 8.58107 9.85969C8.7917 9.76662 8.98309 9.63022 9.1443 9.45826C9.30552 9.2863 9.4334 9.08215 9.52065 8.85747C9.60789 8.6328 9.6528 8.39199 9.6528 8.1488C9.6528 7.90561 9.60789 7.6648 9.52065 7.44013C9.4334 7.21545 9.30552 7.0113 9.1443 6.83934C8.98309 6.66738 8.7917 6.53098 8.58107 6.43791C8.37043 6.34485 8.14468 6.29695 7.91669 6.29695ZM11.3889 6.29695V7.03769H15.5556V6.29695H11.3889ZM11.3889 7.77843V8.51917H15.5556V7.77843H11.3889ZM11.3889 9.25991V10.0007H14.1667V9.25991H11.3889Z" fill={fill} />
        </svg>
    )
}