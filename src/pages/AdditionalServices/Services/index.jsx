import { useState } from "react";
import WrapperMain from "../WrapperMain";
import ListItems from "./ListItems";

function Index() {

    const dataTab = [
        {
            name: 'Tất cả',
            type: 0,
            value: 12
        },
        {
            name: 'Đang hoạt động',
            type: 1,
            value: 11
        },
        {
            name: 'Đã ẩn',
            type: 2,
            value: 1
        }
    ]

    const [filter, setFilter] = useState({
        keyword: '',
        type: 0,
    })

    return (
        <WrapperMain
            tabs={dataTab}
            label="Dịch vụ bổ trợ"
            labelBtn="Thêm dịch vụ"
            filter={filter}
        >
            <ListItems />
        </WrapperMain>
    );
}

export default Index;