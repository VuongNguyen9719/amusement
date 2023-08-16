function IconAddPhoto({
    width = 24,
    fill= "#4F46E5"
}) {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width={width} height={width} viewBox={`0 0 ${width} ${width}`} fill="none">
            <path d="M19.8333 12.25V8.16667C19.8333 7.525 19.3083 7 18.6667 7H4.66667C4.025 7 3.5 7.525 3.5 8.16667V19.8333C3.5 20.475 4.025 21 4.66667 21H18.6667C19.3083 21 19.8333 20.475 19.8333 19.8333V15.75L23.5042 19.4209C23.8717 19.7883 24.5 19.5281 24.5 19.0084V8.99162C24.5 8.47193 23.8717 8.21167 23.5042 8.57915L19.8333 12.25ZM17.5 18.6667H5.83333V9.33333H17.5V18.6667ZM10.5 16.3333C10.5 16.9777 11.0223 17.5 11.6667 17.5C12.311 17.5 12.8333 16.9777 12.8333 16.3333V15.1667H14C14.6443 15.1667 15.1667 14.6443 15.1667 14C15.1667 13.3557 14.6443 12.8333 14 12.8333H12.8333V11.6667C12.8333 11.0223 12.311 10.5 11.6667 10.5C11.0223 10.5 10.5 11.0223 10.5 11.6667V12.8333H9.33333C8.689 12.8333 8.16667 13.3557 8.16667 14C8.16667 14.6443 8.689 15.1667 9.33333 15.1667H10.5V16.3333Z" fill={fill}/>
        </svg>
    );
}

export default IconAddPhoto;