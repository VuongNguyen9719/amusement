import Scroll from '~formControls/Scrollbar'
import noImg from '~assets/img/no-image.jpg'

const Item = () => {
    return (
        <div
            className='p-[8px] flex gap-x-[12px] rounded-lg border border-solid border-[#E3E8EF] bg-[#FCFCFD] mb-[12px]'
        >
            <div
                className='relative w-[40%] max-w-[300px] h-[202px] rounded flex-none'
            >
                <img className='w-full h-full object-cover' src={noImg}/>
                <div
                    className='absolute w-[28px] h-[] top-[8px] left-[8px] flex items-center justify-center rounded py-[6px] px-[8px] bg-[#222934] text-base not-italic font-medium leading-4 text-[#FFF]'
                >
                    1
                </div>
            </div>
            <div
                className='flex-1'
            >
                <p className='text-[#4B5565] text-base not-italic font-medium leading-5 mb-[4px]'>Happy Studiens giảm giá 20%</p>
                <p
                    className='overflow-hidden text-sm not-italic font-normal leading-5  mb-[4px]'
                    style={{
                        WebkitBoxOrient: 'vertical',
                        WebkitLineClamp: '1',
                        display: '-webkit-box'
                    }}
                    data-tooltip-id="my-text" data-tooltip-content="Khu vui chơi xin gửi lời chức mừng tới toàn bộ các bạn học sinh sinh viên, và xin dành tặng uuw đãi dặc biệt giảm 20% tổng hoa đơn cho các bạn học sinh sinh viên"
                >
                    Khu vui chơi xin gửi lời chức mừng tới toàn bộ các bạn học sinh sinh viên, và xin dành tặng uuw đãi dặc biệt giảm 20% tổng hoa đơn cho các bạn học sinh sinh viên
                </p>
                <div
                    className='flex gap-x-[4px] items-center mb-[4px]'
                >
                    <p className='w-[70px] text-[#9AA4B2] text-sm not-italic font-normal leading-5'>Thời gian:</p>
                    <p className='text-[#364152] text-sm not-italic font-normal leading-5'>08/08/2023 - 12/08/2023</p>
                </div>
                <div
                    className='flex gap-x-[4px] items-center mb-[4px]'
                >
                    <p className='w-[70px] text-[#9AA4B2] text-sm not-italic font-normal leading-5'>Giảm:</p>
                    <p className='text-[#364152] text-sm not-italic font-normal leading-5'>20%</p>
                </div>
                <div
                    className='flex gap-x-[4px] items-center mb-[4px]'
                >
                    <p className='w-[70px] text-[#9AA4B2] text-sm not-italic font-normal leading-5'>Số lượng:</p>
                    <p className='text-[#364152] text-sm not-italic font-normal leading-5'>500 mã</p>
                </div>
                <div
                    className='flex gap-x-[4px] items-center mb-[8px]'
                >
                    <p className='w-[70px] text-[#9AA4B2] text-sm not-italic font-normal leading-5'>Còn lại:</p>
                    <p className='text-[#364152] text-sm not-italic font-normal leading-5'>500 mã</p>
                </div>
                <div className='px-[10px] py-[4px] flex items-center justify-center w-[105px] rounded bg-[#ECFDF3] text-[#12B76A] text-sm not-italic font-medium leading-5'>
                    Đang diễn ra
                </div>
            </div>

        </div>
    )
}

function ListItems() {
    return (
        <Scroll
            className="h-[calc(100%-60px)]"
        >
            <Item />
            <Item />
            <Item />
            <Item />
            <Item />
        </Scroll>
    );
}

export default ListItems;