import React, { Fragment, useEffect, useState } from 'react';
import Item from './Item';
import DetailItem from './DetailItem';
import { useLocation } from 'react-router-dom';


function MultiItem(props) {
    const { items, name } = props;
    const [listItemShowDetail, setListItemShowDetail] = useState([]);
    const location = useLocation();
    const { pathname } = location;

    const onShowDetail = (indexItem, canFilter) => {
        let newItemShow = [...listItemShowDetail];
        const isHasIndex = newItemShow && newItemShow.some(ind => ind === indexItem);
        if (isHasIndex && canFilter) {
            newItemShow = newItemShow.filter(ind => ind !== indexItem);
        } else {
            newItemShow.push(indexItem)
        }

        setListItemShowDetail(newItemShow)
    }

    return (
        <div className='flex flex-col gap-y-[8px]'>
            <p className='ml-[12px] text-[#9AA4B2] text-sm not-italic font-medium leading-5'>{name}</p>
            {items && items.length > 0 &&
                items.map((item, index) => {
                    const isShowDetail = listItemShowDetail.some(item => item === index);
                    return (
                        <div

                            key={index}
                        >
                            <Item
                                {...item}
                                onClick={() => { onShowDetail(index, true) }}
                                isShowDetail={isShowDetail}
                                onActive={() => {
                                    onShowDetail(index)
                                }}
                            />
                            {
                                isShowDetail &&
                                item.items && item.items.length > 0 &&
                                item.items.map((it, index) => {
                                    return (
                                        <DetailItem
                                            {...it}
                                            key={index}
                                        />
                                    )
                                })
                            }
                        </div>
                    )
                })
            }
        </div>
    );
}

export default MultiItem;