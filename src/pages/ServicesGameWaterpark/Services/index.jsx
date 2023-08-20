import { useState } from "react";
import WrapperMain from "../WrapperMain";
import ListItems from "./ListItems";
import { useDispatch } from "react-redux";
import { showDialog } from "~reduxStore/Actions";
import DialogAddServices from "./DialogAddServices";

function Index() {
    const dispatch = useDispatch()

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

    const onAdd = (e) => {
        dispatch(showDialog({
            element: e.target,
            component: DialogAddServices,
            title: 'Thêm dịch vụ',
        }))
    }

    return (
        <WrapperMain
            tabs={dataTab}
            label="Dịch vụ bổ trợ"
            labelBtn="Thêm dịch vụ"
            filter={filter}
            onAdd={onAdd}
        >
            <ListItems />
        </WrapperMain>
    );
}

export default Index;