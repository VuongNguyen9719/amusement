import noImg from '~assets/img/no-image.jpg'
import { showPopper } from '~reduxStore/Actions'
import PopperEdit from './PopperEdit';
import { useDispatch } from "react-redux";

function ItemFilm({
    avatar = '',
    name = '',
    description = '',
    genre,
    show_times = [],
    index,
    ...res
}) {

    const dispatch = useDispatch();
    const onEdit = (e) => {
        dispatch(showPopper({
            element: e.target,
            component: PopperEdit,
            id: res.id,
            day: new Date(res.calendar_day),
            ...res
        }))
        e.preventDefault();
    }

    return (
        <div
            className="w-[calc((100%/3)-15px)] p-2 border border-solid border-[#E3E8EF] bg-[#FCFCFD] flex flex-col 2xl:flex-row gap-y-3 2xl:gap-x-3 rounded-lg group"
        >
            <div className="w-full 2xl:w-[122px] h-[174px] relative flex-none rounded">
                <img className="w-full h-full object-cover rounded" src={avatar} />
                <div className='absolute w-[28px] h-[28px] px-[8px] py-[6px] flex items-center justify-center rounded bg-[#222934B8] top-2 left-2 text-[#FFF] text-base not-italic font-medium leading-4'>{index}</div>
                <div
                    className="flex z-20 justify-center items-center w-[28px] h-[28px] p-1 rounded bg-[#222934B8] cursor-pointer opacity-0 group-hover:opacity-100 transition-opacity absolute top-1 right-1"
                    onClick={onEdit}
                >
                    <div className="flex gap-x-[2px] items-center justify-center pointer-events-none">
                        <span className="w-[4px] h-[4px] bg-white rounded-[50%] "></span>
                        <span className="w-[4px] h-[4px] bg-white rounded-[50%] "></span>
                        <span className="w-[4px] h-[4px] bg-white rounded-[50%] "></span>
                    </div>
                </div>
                {
                    res.status === 0 &&
                    <div className='absolute w-full h-full top-0 left-0 right-0 bottom-0 rounded opacity-60 bg-[#222934] flex items-center justify-center'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                            <path d="M9.99999 5.4734C12.3 5.4734 14.1667 7.30696 14.1667 9.56617C14.1667 9.98363 14.0833 10.3847 13.9667 10.7613L16.5167 13.266C17.675 12.2592 18.5917 10.9986 19.1667 9.55798C17.725 5.97271 14.1667 3.42701 9.99999 3.42701C8.94166 3.42701 7.92499 3.59072 6.96666 3.89359L8.77499 5.66985C9.16666 5.55525 9.57499 5.4734 9.99999 5.4734ZM2.25833 2.73943C1.93333 3.05866 1.93333 3.57435 2.25833 3.89359L3.89999 5.50614C2.54999 6.56207 1.47499 7.95362 0.833328 9.56617C2.27499 13.1596 5.83333 15.7053 9.99999 15.7053C11.2667 15.7053 12.475 15.4598 13.5917 15.0341L15.8583 17.2606C16.1833 17.5798 16.7083 17.5798 17.0333 17.2606C17.3583 16.9413 17.3583 16.4256 17.0333 16.1064L3.44166 2.73943C3.11666 2.42019 2.58333 2.42019 2.25833 2.73943ZM9.99999 13.6589C7.69999 13.6589 5.83333 11.8254 5.83333 9.56617C5.83333 8.93588 5.98333 8.33834 6.24166 7.81446L7.54999 9.09959C7.52499 9.24693 7.49999 9.40246 7.49999 9.56617C7.49999 10.925 8.61666 12.0218 9.99999 12.0218C10.1667 12.0218 10.3167 11.9973 10.475 11.9645L11.7833 13.2497C11.2417 13.5116 10.6417 13.6589 9.99999 13.6589ZM12.475 9.29604C12.35 8.15007 11.4333 7.25784 10.275 7.13506L12.475 9.29604Z" fill="white" />
                        </svg>
                    </div>
                }
            </div>

            <div
                className='flex flex-col items-start gap-y-[8px] flex-1'
            >
                <div className='flex flex-col items-start gap-y-[4px] self-stretch'>
                    <p className='self-stretch text-[#4B5565] text-base not-italic font-medium leading-5 capitalize'>{name}</p>
                    <p className=' self-stretch text-[#9AA4B2] text-xs not-italic font-normal leading-4 capitalize'>{description}</p>
                </div>
                <div className='flex flex-wrap gap-1'>
                    {
                        show_times && show_times.length > 0 &&
                        show_times.map((showTime, index) => {
                            return (
                                <div className='flex flex-col px-[4px] py-[6px] items-center justify-center rounded bg-[#EEF2FF] ]' key={index}>
                                    <p className='text-[#364152] text-xs not-italic font-medium leading-4 text-[11px]'>{showTime.start_time} - {showTime.end_time}</p>
                                    <p className='text-[#6366F1] not-italic font-medium leading-3 text-[10px]'>{showTime.price}đ</p>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    );
}

export default ItemFilm;