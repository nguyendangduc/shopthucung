import React from 'react';
import Control from './control/Control'
import OrderList from './orderList/OrderList'
function MenuRight(props) {
    return (
        <>
            <div className="col l-10 m-8 c-12">
                <div className="menu-right">
                    <Control />
                    <OrderList />
                </div>
            </div>
        </>
    );
}

export default MenuRight;