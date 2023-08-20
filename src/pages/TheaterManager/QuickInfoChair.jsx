import Input from '~formControls/Input'

function QuickInfoChair() {
    return (
        <div
            className="flex w-full flex-col items-center justify-center gap-y-8 "
        >
            <div className="flex gap-x-[30px] ">
                <div className="flex items-center gap-x-3">
                    <div className="w-[20px] h-[20px] rounded bg-[#4B5565]"></div>
                    <span className="text-[#4B5565] text-base not-italic font-medium leading-5">Ghế đơn</span>
                </div>
                <div className="flex items-center gap-x-3">
                    <div className="w-[20px] h-[20px] rounded bg-[#43A3D1]"></div>
                    <span className="text-[#4B5565] text-base not-italic font-medium leading-5">Ghế đôi</span>
                </div>
                <div className="flex items-center gap-x-3">
                    <div className="w-[20px] h-[20px] rounded bg-[#1672EC]"></div>
                    <span className="text-[#4B5565] text-base not-italic font-medium leading-5">Ghế 3</span>
                </div>
                <div className="flex items-center gap-x-3">
                    <div className="w-[20px] h-[20px] rounded bg-[#E3E8EF]"></div>
                    <span className="text-[#4B5565] text-base not-italic font-medium leading-5">Ghế đã dừng hoạt động</span>
                </div>
            </div>
            <div
                className="flex justify-between items-center self-stretch"
            >
                <p className="text-[#364152] text-base not-italic font-normal leading-6">Hệ số nhân của hạng ghế với giá vé tương ứng</p>
                <div className="flex gap-x-5">
                    <div className="flex items-center gap-x-1">
                        <div className="flex gap-x-[2px]">
                            <p className="text-[#4B5565] text-sm not-italic font-normal leading-5">Ghế đơn</p>
                            <p className="text-[#F97066] text-sm not-italic font-normal leading-5">*</p>
                        </div>
                        <Input 
                            className="p-[10px] flex items-center justify-center rounded-lg border border-solid border-[#E3E8EF] bg-[#FCFCFD] w-20"
                        />
                    </div>
                    <div className="flex items-center gap-x-1">
                        <div className="flex gap-x-[2px]">
                            <p className="text-[#4B5565] text-sm not-italic font-normal leading-5">Ghế đôi</p>
                            <p className="text-[#F97066] text-sm not-italic font-normal leading-5">*</p>
                        </div>
                        <Input 
                            className="p-[10px] flex items-center justify-center rounded-lg border border-solid border-[#E3E8EF] bg-[#FCFCFD] w-20"
                        />
                    </div>
                    <div className="flex items-center gap-x-1">
                        <div className="flex gap-x-[2px]">
                            <p className="text-[#4B5565] text-sm not-italic font-normal leading-5">Ghế 3</p>
                            <p className="text-[#F97066] text-sm not-italic font-normal leading-5">*</p>
                        </div>
                        <Input 
                            className="p-[10px] flex items-center justify-center rounded-lg border border-solid border-[#E3E8EF] bg-[#FCFCFD] w-20"
                        />
                    </div>

                </div>
            </div>
        </div>
    );
}

export default QuickInfoChair;