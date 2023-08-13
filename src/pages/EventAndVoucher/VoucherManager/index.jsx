import { useState } from "react";
import WrapperMain from "../WrapperMain";
import ListItems from "./ListItems";
import { Tooltip } from 'react-tooltip'


function Index() {

    const dataTab = [
        {
            name: 'Tất cả',
            type: 0,
            value: 12
        },
        {
            name: 'Đang diễn ra',
            type: 1,
            value: 11
        },
        {
            name: 'Chưa diễn ra',
            type: 2,
            value: 1
        },
        {
            name: 'Đã kết thúc',
            type: 3,
            value: 11
        },
        {
            name: 'Đã ẩn',
            type: 4,
            value: 1
        },
    ]
    const [filter, setFilter] = useState({
        keyword: '',
        type: 0,
    })
    return (
        <WrapperMain
            tabs={dataTab}
            label="Quản lý voucher"
            labelBtn="Thêm Voucher"
            filter={filter}
        >
            <ListItems />

            <Tooltip id="my-text" />
        </WrapperMain>
    );
}

export default Index;