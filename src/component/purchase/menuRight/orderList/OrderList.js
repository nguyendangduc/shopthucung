import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {get_order_list_request} from 'store/actions/product/productAction';
import OrderItem from './orderItem/OrderItem';
function OrderList(props) {
    const dispatch = useDispatch()
    const {purchase} = useSelector(({ featureProductsReducer }) => featureProductsReducer)
    useEffect(() =>{
        dispatch(get_order_list_request(0))
    }, [])
    return (
        <>
            <div className="purchased-order">
                <ul className="list-order">
                    {
                        purchase ? purchase.map((order,index) => <OrderItem key={index} index={index} order={order} />) : ''
                    }
                </ul>
            </div>
        </>
    );
}

export default OrderList;