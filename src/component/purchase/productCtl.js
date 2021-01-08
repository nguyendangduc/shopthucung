import React from 'react';
import swal from 'sweetalert'
import {useDispatch, useSelector} from 'react-redux';
import {cancel_order_request, delete_order_request} from 'store/actions/product/productAction';

function ProductCtl(props) {
    const dispatch = useDispatch()
    const {totalPrice, state, id} = props;
    const  cancelOrder = async () => {
        if(state === 1) {
            const confirm = await swal("Are you sure?", {
                dangerMode: true,
                buttons: true,
              });

            if(confirm) {
                dispatch(cancel_order_request(id))
            }
        }
    }
    const deleteOrder = async () => {
            const confirm = await swal("Are you sure?", {
                dangerMode: true,
                buttons: true,
              });
            if(confirm) {
                dispatch(delete_order_request(id))
            }
       
    }
    return (
        <>
            <div className="product-ctl-other">
                <div className="product-middle">
                    <div className="product-total">
                        <span>Tổng số tiền:</span>
                        <span className="product-total__price">${totalPrice}</span>
                    </div>
                </div>
                <div className="product-bottom">
                    <span className="product-state">{state === 1 ? 'Chờ xác nhận' : state === 2 ? 'Chờ lấy hàng' : state === 3 ? 'Đang giao' : state === 4 ? 'Đã giao' : state === 5 ? 'Đã hủy' : ''}</span>
                    <div className="product-ctr">
                        <button className="btn product-ctr__btn-cancel" onClick={cancelOrder}>Hủy đơn hàng</button>
                        <button  className="btn product-ctr__btn-detail">Chi tiết hủy đơn</button>
                        {state === 5 ? <button onClick={deleteOrder} className="btn product-ctr__btn-detail">Xóa đơn</button> : ''}
                    </div>
                </div>
            </div>
        </>
    );
}

export default ProductCtl;