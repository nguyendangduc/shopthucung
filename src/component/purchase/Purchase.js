import React from 'react';
import MenuLeft from './menuLeft/MenuLeft'
import MenuRight from './menuRight/MenuRight'
function Purchase(props) {
    return (
        <>
            <div className="main">
                <div className="grid">
                    <div className="row">
                        <MenuLeft />
                        <MenuRight />
                    </div>
                </div>
            </div>
        </>
    );
}

export default Purchase;