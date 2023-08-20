import { useState } from "react";
import WrapperMain from "../WrapperMain";
import { useDispatch } from "react-redux";
import { showDialog } from "~reduxStore/Actions";
import ListItems from "./ListItems";
import DialogAddTicket from "./DialogAddTicket";

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
            component: DialogAddTicket,
            title: 'Tạo combo',
        }))
    }

    return (
        <WrapperMain
            tabs={dataTab}
            label="Combo đã tạo"
            labelBtn="Tạo combo"
            filter={filter}
            onAdd={onAdd}
        >
            <ListItems />
        </WrapperMain>
    );
}

export default Index;