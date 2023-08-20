
import IconAddPhoto from '~assets/svg/IconAddPhoto';
import IconWrapper from '~HOC/IconWrapper'
import SvgIcon from '~formControls/SvgIcon.jsx'
import Input from '~formControls/Input'
import Button from '~formControls/Button'
import RowDialog from "../RowDialog";
import DatePickerCustom from '~formControls/DatePicker';

function DialogAddTicket({
    onClose = () => { }
}) {
    const listDaySuggest = ["30/04", '01/05', '02/09', '01/06', '14/02']
    return (
        <div className="flex flex-col gap-y-5 p-5">
            <RowDialog
                label="Tên vé"
                isRequired
                className="flex-1"
            >
                <Input
                    placeholder="Nhập tên phim.."
                    className="flex items-center justify-center p-[10px] rounded-lg border border-solid border-[#E3E8EF] bg-[#FCFCFD]"
                />
            </RowDialog>
            <RowDialog
                label="Mô tả"
                isRequired
                className="flex-1"
            >
                <Input
                    placeholder="Nhập mô tả..."
                    className="flex items-center justify-center p-[10px] rounded-lg border border-solid border-[#E3E8EF] bg-[#FCFCFD]"
                />
            </RowDialog>
            <div className='flex gap-x-4'>
                <RowDialog
                    label="Giá vé"
                    isRequired
                    className="flex-1"
                >
                    <Input
                        placeholder="Nhập giá vé.."
                        className="flex items-center justify-center p-[10px] rounded-lg border border-solid border-[#E3E8EF] bg-[#FCFCFD]"
                    />
                </RowDialog>
                <RowDialog
                    label="Giá vé cuối tuần "
                    className="w-[272px]"
                >
                    <Input
                        placeholder="Nhập giá vé..."
                        className="flex items-center justify-center p-[10px] rounded-lg border border-solid border-[#E3E8EF] bg-[#FCFCFD]"
                    />
                </RowDialog>
            </div>
            <div className='flex gap-x-4'>
                <RowDialog
                    label="Ngày lễ "
                    className="flex-1"
                >
                    <Input
                        placeholder="Nhập giá vé.."
                        className="flex items-center justify-center p-[10px] rounded-lg border border-solid border-[#E3E8EF] bg-[#FCFCFD]"
                    />
                </RowDialog>
                <div className='flex justify-end gap-x-3 items-end flex-1'>
                    <DatePickerCustom />
                    <Button
                        text="Thêm"
                        className="px-4 py-[10px] flex items-center justify-center rounded-lg bg-[#EEF2FF] text-[#4F46E5] text-sm not-italic font-medium leading-5 cursor-pointer"
                    />
                </div>
            </div>
            <RowDialog
                label="Ngày lễ gợi ý:"
                className="flex-1"
            >
                <div className='flex gap-x-2 '>
                    {
                        listDaySuggest.map((daySuggest, index) => {
                            return (
                                <div
                                    key={index}
                                    className='flex items-center justify-center p-[6px] rounded bg-[#EEF2FF] cursor-pointer'
                                >
                                    <span className='text-[#4F46E5] text-xs not-italic font-medium leading-4'>{daySuggest}</span>
                                </div>
                            )
                        })
                    }
                </div>
            </RowDialog>
            <div className='flex gap-x-3'>
                <div className='flex flex-col gap-y-1'>
                    <p className='text-[#4B5565] text-sm not-italic font-normal leading-5'>Ảnh đại diện</p>
                    <div className='p-[10px] flex items-center justify-center w-[100px] h-[100px] rounded-lg border border-solid border-[#E3E8EF] bg-[#FCFCFD] cursor-pointer'>
                        <IconWrapper width={28}>
                            <SvgIcon icon={<IconAddPhoto />} />
                        </IconWrapper>
                    </div>
                </div>
            </div>
            <div className='flex justify-end gap-x-4 '>
                <Button
                    text="Huỷ"
                    className="px-4 py-[10px] flex items-center justify-center rounded-lg bg-[#F8FAFC] text-[#697586] text-sm not-italic font-medium leading-5 cursor-pointer"
                    onClick={onClose}
                />
                <Button
                    text="Hoàn thành"
                    className="px-4 py-[10px] flex items-center justify-center rounded-lg bg-[#4F46E5] text-[#FFF] text-sm not-italic font-medium leading-5 cursor-pointer"
                    onClick={() => { }}
                    style={{
                        boxShadow: `0px 0px 0px 1px #5E5ADB, 0px 1px 1px 0px rgba(0, 0, 0, 0.10)`
                    }}
                />
            </div>
        </div>
    );
}

export default DialogAddTicket;