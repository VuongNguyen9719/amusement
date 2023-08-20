

import Input from '~formControls/Input'
import Button from '~formControls/Button'
import IconSearch from '~assets/svg/IconSearch';
import IconAdd from '~assets/svg/IconAdd';
import Tab from '~formControls/Tab'
import classNames from 'classnames';

function WrapperMain({
    tabs = [],
    label = '',
    labelBtn = '',
    onAdd = () => { },
    onChange = () => { },
    className = "",
    filter = {},
    children
}) {
    return (
        <div
            className={classNames(
                "flex-1 bg-[#FFF] h-full",
                className
            )}
        >
            <div
                className="p-[20px] flex justify-between items-center rounded-xl bg-[#FFF] h-[80px]"
            >
                <Input
                    icon={<IconSearch />}
                    placeholder="Tìm kiếm"
                    className="flex items-center rounded-lg border border-solid border-[#E3E8EF] bg-[#FCFCFD] py-[8px] px-[12px]"
                    value={filter?.keyword}
                />
                <Button
                    text={labelBtn}
                    icon={<IconAdd />}
                    className="rounded-lg cursor-pointer bg-[#EEF2FF] py-[10px] px-[12px] flex gap-x-[4px] items-center justify-center text-[#4F46E5] text-sm not-italic font-medium leading-5 flex-none"
                    onClick={onAdd}
                />
            </div>
            <div
                className='p-[20px] flex flex-col flex-1 h-[calc(100%-80px)]'
            >
                <div
                    className='mb-[12px] flex flex-col gap-y-[12px]'
                >
                    <p className='text-[#364152] text-base not-italic font-medium leading-5'>{label}</p>
                    <Tab
                        data={tabs}
                        defaultType={filter?.type}
                    />
                </div>

                {children}
            </div>
        </div>
    );
}

export default WrapperMain;