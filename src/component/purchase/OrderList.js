import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {get_order_list_request} from 'store/actions/product/productAction';
import OrderItem from './OrderItem';
import { css } from "@emotion/core";
import ClipLoader from "react-spinners/ClipLoader";
const override = css`
  display: block;
  margin: auto;
  border-color: red;
`;
function OrderList(props) {
    const dispatch = useDispatch()
    const {purchase, purchaseIsFetching} = useSelector(({ featureProductsReducer }) => featureProductsReducer)
    useEffect(() =>{
        dispatch(get_order_list_request(0))
    }, [])
    return (
        <>
            <div className="purchased-order">
                <ul className="list-order">
                    {   purchaseIsFetching ?
                        <ClipLoader css={override} size={70} /> :
                        purchase ? purchase.map((order,index) => <OrderItem key={index} index={index} order={order} />) : ''
                    }
                </ul>
            </div>
        </>
    );
}

export default OrderList;