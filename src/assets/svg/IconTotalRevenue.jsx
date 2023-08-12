import React from 'react';

function IconTotalRevenue({width = 29, heigh29, fillRect = '#EEF2FF', fill ="#4F46E5"}) {
    return (
        <svg width="29" height="29" viewBox="0 0 29 29" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="0.5" y="0.427734" width="28" height="28" rx="4" fill={fillRect}/>
            <path d="M14.5 2.76099C8.05998 2.76099 2.83331 7.98765 2.83331 14.4277C2.83331 20.8677 8.05998 26.0943 14.5 26.0943C20.94 26.0943 26.1666 20.8677 26.1666 14.4277C26.1666 7.98765 20.94 2.76099 14.5 2.76099ZM14.5 23.761C9.35498 23.761 5.16665 19.5727 5.16665 14.4277C5.16665 9.28265 9.35498 5.09432 14.5 5.09432C19.645 5.09432 23.8333 9.28265 23.8333 14.4277C23.8333 19.5727 19.645 23.761 14.5 23.761ZM14.8616 13.4243C12.7966 12.8993 12.1316 12.3277 12.1316 11.476C12.1316 10.496 13.0533 9.80765 14.5816 9.80765C15.702 9.80765 16.3365 10.1805 16.6345 10.7926C16.869 11.2741 17.2679 11.721 17.8035 11.721C18.3696 11.721 18.8362 11.2422 18.6661 10.7023C18.3079 9.56509 17.403 8.61845 15.935 8.25599V7.42765C15.935 6.78332 15.4126 6.26099 14.7683 6.26099H14.3833C13.739 6.26099 13.2166 6.78332 13.2166 7.42765V8.23265C11.455 8.60599 10.0433 9.74932 10.0433 11.511C10.0433 13.5993 11.7816 14.6493 14.3133 15.256C16.5883 15.7927 17.0433 16.5977 17.0433 17.4377C17.0433 18.056 16.5883 19.0593 14.5933 19.0593C13.2794 19.0593 12.5262 18.6432 12.1587 18.0224C11.8913 17.5708 11.4865 17.146 10.9616 17.146C10.3748 17.146 9.89203 17.6515 10.0926 18.2029C10.5772 19.5351 11.8059 20.3194 13.2166 20.611V21.4277C13.2166 22.072 13.739 22.5943 14.3833 22.5943H14.78C15.4243 22.5943 15.9466 22.072 15.9466 21.4277V20.646C17.72 20.3077 19.12 19.2927 19.1316 17.4143C19.12 14.8477 16.915 13.961 14.8616 13.4243Z" fill={fill}/>
        </svg>

    );
}

export default IconTotalRevenue;