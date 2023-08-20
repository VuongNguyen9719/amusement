import WrapeprMainDialog from './WrapeprMainDialog'
import RowAddCombo from "./RowDialogAddCombo";
import Input from '~formControls/Input';
import IconAddPhoto from '~assets/svg/IconAddPhoto';
import IconWrapper from '~HOC/IconWrapper'
import SvgIcon from '~formControls/SvgIcon.jsx'


function ComboSelect() {
    return (
        <WrapeprMainDialog>
            <RowAddCombo
                title="Tên Combo"
                isRequired
            >
                <Input
                    placeholder="Nhập tên combo..."
                    className="flex p-[10px] items-center rounded-lg border border-solid border-[#E3E8EF] bg-[#FCFCFD]"
                />
            </RowAddCombo>
            <RowAddCombo
                title="Ảnh đại diện"
            >
                <div className='p-[10px] flex items-center justify-center w-[100px] h-[100px] rounded-lg border border-solid border-[#E3E8EF] bg-[#FCFCFD]'>
                    <IconWrapper width={28}>
                        <SvgIcon icon={<IconAddPhoto />} />
                    </IconWrapper>
                </div>
            </RowAddCombo>

            <div
                className="flex gap-x-3 flex-1"
            >
                <RowAddCombo
                    title="Giá combo"
                    isRequired
                >
                    <Input
                        placeholder="Nhập giá combo..."
                        className="flex p-[10px] items-center rounded-lg border border-solid border-[#E3E8EF] bg-[#FCFCFD]"
                    />
                </RowAddCombo>
                <RowAddCombo
                    title="Giá đề xuất"
                >
                    <Input
                        placeholder="Nhập giá đề xuất..."
                        className="flex p-[10px] items-center rounded-lg border border-solid border-[#E3E8EF] bg-[#FCFCFD]"
                    />
                </RowAddCombo>
            </div>
            <RowAddCombo
                title="Dịch vụ đã chọn:"
                classNameTitle="text-[#364152] text-base not-italic font-medium leading-5"
            >
                <div className="flex gap-2 flex-wrap ">
                    <div className="flex p-[6px] items-center justify-center gap-x-1 rounded bg-[#EEF2FF] ">
                        <span className="text-[#364152] text-xs not-italic font-medium leading-4">Kính bơi</span>
                    </div>
                    <div className="flex p-[6px] items-center justify-center gap-x-1 rounded bg-[#EEF2FF] ">
                        <span className="text-[#364152] text-xs not-italic font-medium leading-4">Kính bơi</span>
                    </div>
                    <div className="flex p-[6px] items-center justify-center gap-x-1 rounded bg-[#EEF2FF] ">
                        <span className="text-[#364152] text-xs not-italic font-medium leading-4">Kính bơi</span>
                    </div>
                    <div className="flex p-[6px] items-center justify-center gap-x-1 rounded bg-[#EEF2FF] ">
                        <span className="text-[#364152] text-xs not-italic font-medium leading-4">Kính bơi</span>
                    </div>
                    <div className="flex p-[6px] items-center justify-center gap-x-1 rounded bg-[#EEF2FF] ">
                        <span className="text-[#364152] text-xs not-italic font-medium leading-4">Kính bơi</span>
                    </div>
                    <div className="flex p-[6px] items-center justify-center gap-x-1 rounded bg-[#EEF2FF] ">
                        <span className="text-[#364152] text-xs not-italic font-medium leading-4">Kính bơi</span>
                    </div>

                </div>
            </RowAddCombo>
        </WrapeprMainDialog>
    )
}

export default ComboSelect;