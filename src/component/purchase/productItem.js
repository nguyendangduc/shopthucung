import React from 'react';

function productItem(props) {
    const {item} = props;
    return (
        <>
            <div className="product-item">
                <div className="row">
                    <div className="col l-2">
                        <img src={item.image} alt="" className="product-img" />
                    </div>
                    <div className="col l-10">
                        <div className="product-info">
                            <div className="product-info-wrap">
                                <p className="product-info__name">{item.name}</p>
                                <p className="product-info__cate">Phân loại thú cưng: {item.category}</p>
                                <span className="product-info__quantity">x {item.quantity}</span>
                            </div>
                            <div className="product-info__price">
                                <span className="current-price"><b>$</b>{item.price}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default productItem;