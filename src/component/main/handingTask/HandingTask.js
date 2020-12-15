import React from 'react';
import { useDispatch } from 'react-redux'
import { handle_task_request } from 'store/actions/product/productAction'

function HandingTask(props) {
    const dispatch = useDispatch()
    const search = (event) => {
        const searchVal = event.target.parentNode.querySelector('input').value
        dispatch(handle_task_request({
            handingType: "search",
            handingPayload: searchVal
        }))
    }
    const sort = (sort) => {
        dispatch(handle_task_request({
            handingType: "sort",
            handingPayload: sort
        }))
    }
    return (
        <>
            <div className="feature-products__search">
                <input type="text" className="feature-products__input" placeholder="Nhập tên thú cưng muốn tìm kiếm" />
                <button className=" btn feature-products__btn" onClick={search} >Tim kiem</button>
            </div>
            <div className="feature-products__ctl">
                <div>
                    <span>Sắp xếp theo giá:</span>
                    <button className="btn filterPrice" onClick={() => { sort({ sortBy: "price", val: 1 }) }}>Thấp đến cao</button>
                    <button className="btn filterPrice" onClick={() => { sort({ sortBy: "price", val: -1 }) }}>Cao đến
                    thấp</button>
                </div>
                <div>
                    <span>Sắp xếp theo tên:</span>
                    <button className="btn filterName" onClick={() => { sort({ sortBy: "name", val: 1 }) }}>A đến Z</button>
                    <button className="btn filterName" onClick={() => { sort({ sortBy: "name", val: -1 }) }}>Z đến A</button></div>
            </div>
        </>
    );
}

export default HandingTask;