import Input from '@formControls/Input'
import Button from '@formControls/Button'
import IconAdd from '@assets/svg/IconAdd'
import Select from '@formControls/Select'
import IconSearch from '@assets/svg/IconSearch';

function Filter() {

    return (
        <div
            className="p-[20px] flex justify-between items-center h-[80px]"
        >
            <div
                className="flex gap-x-[16px] "
            >
                <Select
                    placeholder="Tất cả thể loại"
                />
                <Input
                    placeholder="Tìm kiếm"
                    icon={<IconSearch />}
                    className="rounded-lg border-[#E3E8EF] bg-[#FCFCFD]"
                />
            </div>
            <Button
                text="Thêm phim mới"
                className="flex-none flex gap-x-[4px] px-[12px] py-[10px] bg-[#4F46E5] rounded-lg text-[#FFF] text-sm not-italic font-medium leading-5 cursor-pointer"
                style={{
                    boxShadow: `0px 0px 0px 1px #5E5ADB, 0px 1px 1px 0px rgba(0, 0, 0, 0.10)`
                }}
                icon={<IconAdd fill="#FFFFFF" />}
            />
        </div>
    );
}

export default Filter;