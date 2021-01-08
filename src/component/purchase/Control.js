import React, { useEffect } from 'react';
import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { get_order_list_request, set_state_watched_purchase } from 'store/actions/product/productAction'
function Control(props) {
    // const [stateWatcher, setStateWatcher] = useState(0)
    const {stateWatcher} = useSelector(({ featureProductsReducer }) => featureProductsReducer)
    const dispatch = useDispatch()
    const getPurchase = (param) => {
        dispatch(get_order_list_request(param))
    }
    console.log(stateWatcher)
    // useEffect(() => {
    //     dispatch(get_order_list_request(user.id, stateWatcher)) 
    // }, [stateWatcher])
    const navList = () => {
        let list = []
        for (let i = 0; i < 6; i++) {
            list = [
                ...list,
                <div key={i} onClick={() => getPurchase(i)}
                    className={i === stateWatcher ? 'nav__item col l-2 m-2 c-2 selected' : 'nav__item col l-2 m-2 c-2'}>
                    {i === 0 ? 'Tất cả' : i === 1 ? 'Chờ xác nhận' : i === 2 ? 'Chờ lấy hàng' : i === 3 ? 'Đang giao' : i === 4 ? 'Đã giao' : i === 5 ? 'Đã hủy' : ''}
                </div>
            ]
        }
        return list
    }
    return (
        <>
            <div className="nav">
                <div className="nav__list row no-gutter">
                    {navList()}
                </div>
            </div>
            <div className="search-box">
                <div className="input-group">
                    <input type="text" placeholder="Tìm kiếm theo Tên Shop,ID đơn hàng hoặc Tên sản phẩm" />
                </div>
                <span className="ti-search" />
            </div>
        </>
    );
}

export default Control;