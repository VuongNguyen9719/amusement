import Tab from '@formControls/Tab'
import ListUser from './ListUser';

function Main() {
    const dataTab = [
        {
            name: 'Tất cả',
            type: 0,
            value: 12
        },
        {
            name: 'Khối rạp chiếu',
            type: 1,
            value: 11
        },
        {
            name: 'Khối trò chơi mạo hiểm',
            type: 2,
            value: 1
        },
        {
            name: 'Khối công viên nước',
            type: 3,
            value: 1
        },
        {
            name: 'Khác',
            type: 4,
            value: 1
        },
    ]
    return (
        <div
            className="h-[calc(100%-80px)] px-[20px] pb-[20px] flex flex-col gap-y-[12px]"
        >
            <Tab
                data={dataTab}
                defaultType={0}
            />
            <ListUser />
        </div>
    );
}

export default Main;