function ChevronLeft({
    width = 24,
    height = 24,
    fill = "#4B5565"
}) {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox={`0 0 ${width} ${height}`} fill="none">
            <path d="M14.6891 6.28792C14.2745 5.90403 13.6048 5.90403 13.1902 6.28792L8.31093 10.806C7.89636 11.1899 7.89636 11.8101 8.31093 12.194L13.1902 16.7121C13.6048 17.096 14.2745 17.096 14.6891 16.7121C15.1036 16.3282 15.1036 15.7081 14.6891 15.3242L10.5645 11.4951L14.6891 7.67584C15.1036 7.29195 15.093 6.66197 14.6891 6.28792Z" fill={fill} />
        </svg>
    );
}

export default ChevronLeft;