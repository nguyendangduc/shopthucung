import React from 'react';
import { Link } from 'react-router-dom';

function Product(props) {
    const getDetailProduct = () => {
        // cách cũ, lưu id, idCate vào localStorage rồi điều hướng
    }
    const toggle = () => {

    }
    const addCart = () => {

    }

    return (
        <>
            <div className="col l-3 m-6 c-12">
                <div className="feature-product__item">
                    <div className="feature-product__img-wrap">
                        <div className="feature-product__detail">
                            <div className="feature-product__overlay">
                            </div>
                            <div className="feature-product__detail-ctr">
                                <Link to={`/detail/?id=${props.product.id}`}>
                                    {/* Css color cho the P de ghi de Link */}
                                    <p>Xem chi tiết</p>
                                </Link>
                                <i onClick={toggle} className="far fa-heart" />
                            </div>
                        </div>
                        <img onClick={getDetailProduct} className="feature-product__img" src={props.product.image} alt="" />
                    </div>
                    <div className="feature-products__info">
                        <Link to={"/detail/?id="+props.product.id}>
                            <h1 className="feature-products__name" onClick={getDetailProduct}>{props.product.name}</h1>
                        </Link>
                        <span className="feature-products__price">{props.product.price}$</span>
                        <button className="feature-products__btn btn" onClick={addCart}>
                            <i className="fas fa-shopping-cart" />
              Add to cart
            </button>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Product;