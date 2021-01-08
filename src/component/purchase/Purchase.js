import React from 'react';
import MenuLeft from './MenuLeft'
import MenuRight from './MenuRight'
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