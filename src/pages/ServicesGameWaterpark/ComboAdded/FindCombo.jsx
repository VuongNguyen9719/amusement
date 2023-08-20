
import WrapeprMainDialog from './WrapeprMainDialog'
import RowAddCombo from "./RowDialogAddCombo";
import Input from '~formControls/Input';
import Scrollbar from '~formControls/Scrollbar';
import IconSearch from '~assets/svg/IconSearch';

import noImg from '~assets/img/no-image.jpg'

const Item = () => {
    return (
        <div className='flex p-2 gap-x-3 rounded-lg border border-solid border-[#E3E8EF] bg-[#FCFCFD] my-3'>
            <div className='w-20 h-20 rounded overflow-hidden '>
                <img src={noImg} className="w-full h-full object-covert" />
            </div>
            <div className='flex flex-col gap-y-1 '>
                <p className='text-[#4B5565] text-base not-italic font-medium leading-5'>Bỏng vị Caramel</p>
                <div className='flex gap-x-1'>
                    <span className='text-[#9AA4B2] text-sm not-italic font-normal leading-5'>Giá:</span>
                    <span className='text-[#364152] text-sm not-italic font-medium leading-5'>40.000 VND</span>
                </div>
            </div>
        </div>
    )
}

function FindCombo() {
    return (
        <WrapeprMainDialog>
            <RowAddCombo
                title="Danh sách dịch vụ"
                isRequired
            >
                <Input
                    icon={<IconSearch />}
                    placeholder="Tìm kiếm"
                    className="flex p-[10px] items-center rounded-lg border border-solid border-[#E3E8EF] bg-[#FCFCFD]"
                />
            </RowAddCombo>
            <Scrollbar className="h-[300px]">
                <Item />
                <Item />
                <Item />
                <Item />
                <Item />
                <Item />
                <Item />
                <Item />
                <Item />
                <Item />
                <Item />
                <Item />
            </Scrollbar>
        </WrapeprMainDialog>
    );
}

export default FindCombo;