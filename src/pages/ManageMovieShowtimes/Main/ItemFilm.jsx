import noImg from '~assets/img/no-image.jpg'

function ItemFilm() {
    return (
        <div
            className="w-[calc((100%/3)-15px)] p-2 border border-solid border-[#E3E8EF] bg-[#FCFCFD] flex flex-col 2xl:flex-row gap-y-3 2xl:gap-x-3 rounded-lg "
        >
            <div className="w-full 2xl:w-[122px] h-[174px] relative flex-none rounded">
                <img className="w-full h-full object-cover rounded" src={noImg} />
                <div className='absolute w-[28px] h-[28px] px-[8px] py-[6px] flex items-center justify-center rounded bg-[#222934B8] top-2 left-2 text-[#FFF] text-base not-italic font-medium leading-4'>1</div>
            </div>

            <div
                className='flex flex-col items-start gap-y-[8px] flex-1'
            >
                <div className='flex flex-col items-start gap-y-[4px] self-stretch'>
                    <p className='self-stretch text-[#4B5565] text-base not-italic font-medium leading-5 capitalize'>Bão Trắng 3: Thiên Đàng Hay Địa Ngục</p>
                    <p className=' self-stretch text-[#9AA4B2] text-xs not-italic font-normal leading-4 capitalize'>White Storm 3: Heaven or Hell - Action, Drama, Crime</p>
                </div>
                <div className='flex flex-wrap gap-1'>
                    <div className='flex flex-col px-[4px] py-[6px] items-center justify-center rounded bg-[#EEF2FF] max-w-[calc((100%/2)-4px)]'>
                        <p className='text-[#364152] text-xs not-italic font-medium leading-4 text-[11px]'>09:00 - 11:15</p>
                        <p className='text-[#6366F1] not-italic font-medium leading-3 text-[10px]'>90.000 đ</p>
                    </div>
                    <div className='flex flex-col px-[4px] py-[6px] items-center justify-center rounded bg-[#EEF2FF] max-w-[calc((100%/2)-4px)]'>
                        <p className='text-[#364152] text-xs not-italic font-medium leading-4 text-[11px]'>09:00 - 11:15</p>
                        <p className='text-[#6366F1] not-italic font-medium leading-3 text-[10px]'>90.000 đ</p>
                    </div>
                    <div className='flex flex-col px-[4px] py-[6px] items-center justify-center rounded bg-[#EEF2FF] max-w-[calc((100%/2)-4px)]'>
                        <p className='text-[#364152] text-xs not-italic font-medium leading-4 text-[11px]'>09:00 - 11:15</p>
                        <p className='text-[#6366F1] not-italic font-medium leading-3 text-[10px]'>90.000 đ</p>
                    </div>
                    <div className='flex flex-col px-[4px] py-[6px] items-center justify-center rounded bg-[#EEF2FF] max-w-[calc((100%/2)-4px)]'>
                        <p className='text-[#364152] text-xs not-italic font-medium leading-4 text-[11px]'>09:00 - 11:15</p>
                        <p className='text-[#6366F1] not-italic font-medium leading-3 text-[10px]'>90.000 đ</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ItemFilm;