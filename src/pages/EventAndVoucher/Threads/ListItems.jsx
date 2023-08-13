import Scroll from '@formControls/Scrollbar'
import noImg from '@assets/img/no-image.jpg'


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
                <p className='text-[#4B5565] overflow-hidden text-base not-italic font-medium leading-5 overflow-ellipsis mb-[4px]'>Đêm tiệc hồ bơi sôi động mùa hè The Flash – Summer Pool Party 2018</p>
                <p className='text-[#9AA4B2] overflow-ellipsis text-sm not-italic font-normal leading-5 mb-[12px]'>Nằm trong chuỗi sự kiện Khánh thành và đưa vào sử dụng bể bơi Aqua Pool do Tập đoàn Picenza tổ chức, đêm tiệc Pool Party đã đem đến cho hàng ngàn người dân thành phố Sơn La những trải nghiệm thăng hoa với vô vàn cảm xúc.</p>
                <div
                    className='flex gap-x-[4px] items-center mb-[4px]'
                >
                    <p className='w-[70px] text-[#9AA4B2] text-sm not-italic font-normal leading-5'>Giờ:</p>
                    <p className='text-[#364152] text-sm not-italic font-normal leading-5'>18:00 - 22:30</p>
                </div>
                <div
                    className='flex gap-x-[4px] items-center mb-[4px]'
                >
                    <p className='w-[70px] text-[#9AA4B2] text-sm not-italic font-normal leading-5'>Thời gian:</p>
                    <p className='text-[#364152] text-sm not-italic font-normal leading-5'>08/08/2023 - 12/08/2023</p>
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