import React from 'react';
import PropTypes from 'prop-types';
import IconEdit from '~assets/svg/IconEdit';
import IconPreview from '~assets/svg/IconPreview';
import IconHidden from '~assets/svg/IconHidden';
import IconTrash from '~assets/svg/IconTrash';
import { useDispatch } from 'react-redux'

import IconWrapper from '~HOC/IconWrapper'
import SvgIcon from '~formControls/SvgIcon.jsx'
import classNames from 'classnames';
import managerFilm from '../../../api/manager-film';
import { setStatus, deleteFilm, changeStatusFilm } from '../../../redux-store/Slice/manage-movie-showtimes';
import enumStatusLoading from '../../../common/constants/enumStatusLoading';
import { toast } from 'react-toastify';
import { showDialogCreateFilm } from '~reduxStore/Actions'

const PopperEdit = ({
    onClose = () => { },
    ...res
}) => {

    const dispatch = useDispatch();
    const onEdit = () => {
        dispatch(showDialogCreateFilm({
            day: res.day,
            id: res.id
        }))
    }

    const onHidden = async () => {
        dispatch(setStatus(enumStatusLoading.LOADING))
        const actionName = res.status === 1 ? "Ẩn" : 'Hiển thị'
        try {
            const respon = await managerFilm.toggleMovie({ movie_id: res.id, status_movie: res.status === 0 ? 1 : 0 });
            toast.success(`${actionName} thành công!`)
            dispatch(setStatus(enumStatusLoading.SUCCESS))
            dispatch(changeStatusFilm({
                id: res.id,
                status: res.status === 0 ? 1 : 0 
            }))
        } catch (error) {
            dispatch(setStatus(enumStatusLoading.NONE))
            dispatch(setMessage(error))
            toast.error(`${actionName} thất bại!. Lỗi: ${error}`)
        }
        onClose()
    }

    const onDelete = async () => {
        dispatch(setStatus(enumStatusLoading.LOADING))
        try {
            const respon = await managerFilm.deleteFilm({ movie_id: res.id });
            toast.success('Xoá thành công!')
            dispatch(setStatus(enumStatusLoading.SUCCESS))
            dispatch(deleteFilm(res.id))
        } catch (error) {
            dispatch(setStatus(enumStatusLoading.NONE))
            dispatch(setMessage(error))
            toast.error(`Xoá thất bại!. Lỗi: ${error}`)
        }
        onClose()
    }

    const actions = [
        { name: 'Chỉnh sửa', icon: IconEdit, onClick: onEdit },
        { name: res.status === 1 ? 'Ẩn phim này' : 'Hiển thị phim này', icon: IconHidden, onClick: onHidden },
    ]

    return (
        <div className="w-[224px]">
            {
                actions.map((action, index) => {
                    const { onClick, icon: Icon, name } = action;
                    return (
                        <div
                            key={index}
                            onClick={() => {
                                onClose()
                                onClick()
                            }}
                            className={classNames(
                                "flex p-2 items-center rounded gap-x-2 cursor-pointer hover:bg-[#EEF2FF]",
                                index === actions.length - 1 && 'border-b border-solid border-[#E3E8EF] pd-[10px]'
                            )}

                        >
                            <IconWrapper width={20}>
                                <SvgIcon icon={<Icon />} />
                            </IconWrapper>
                            <p className='text-[#697586] text-sm not-italic font-medium leading-5'>{name}</p>
                        </div>
                    )
                })
            }
            <div
                onClick={onDelete}
                className={classNames(
                    "flex p-2 items-center gap-x-2 cursor-pointer  hover:bg-[#EEF2FF]  rounded",
                )}
            >
                <IconWrapper width={20}>
                    <SvgIcon icon={<IconTrash />} />
                </IconWrapper>
                <p className='text-[#F97066] text-sm not-italic font-medium leading-5'>Xoá</p>
            </div>
        </div>
    );
};

PopperEdit.propTypes = {

};

export default PopperEdit;