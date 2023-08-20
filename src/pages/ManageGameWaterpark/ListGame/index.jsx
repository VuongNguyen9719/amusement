import { useState } from "react";
import WrapperMain from "../WrapperMain";
import { useDispatch } from "react-redux";
import { showDialog } from "~reduxStore/Actions";
import ListItems from "./ListItems";
import DialogAddGame from "./DialogAddGame";

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
            component: DialogAddGame,
            title: 'Thêm trò chơi công viên nước',
        }))
    }

    return (
        <WrapperMain
            tabs={dataTab}
            label="Danh sách trò chơi"
            labelBtn="Thêm trò chơi"
            filter={filter}
            onAdd={onAdd}
        >
            <ListItems />
        </WrapperMain>
    );
}

export default Index;