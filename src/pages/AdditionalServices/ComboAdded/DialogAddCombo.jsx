
import ComboSelect from './ComboSelect'
import FindCombo from './FindCombo'
import Button from '~formControls/Button'

function DialogAddCombo({
    onClose
}) {
    return (
        <div className="p-5 flex flex-col gap-y-5 bg-[#F8FAFC]">
            <div
                className="flex flex-1 gap-x-3 "
            >
                <ComboSelect />
                <FindCombo />
            </div>
            <div className='flex gap-x-4 justify-end'>
                <Button
                    onClick={onClose}
                    text="Huỷ"
                    className="flex items-center justify-center px-3 py-[10px] rounded-lg bg-[#F8FAFC] cursor-pointer text-[#697586] text-sm not-italic font-medium leading-5"
                />
                <Button
                    text="Hoàn thành"
                    className="flex items-center w-[110px] justify-center px-3 py-[10px]  rounded-lg cursor-pointer text-sm not-italic font-medium leading-5 bg-[#4F46E5] text-[#FFF]"
                />
            </div>
        </div>
    );
}

export default DialogAddCombo;