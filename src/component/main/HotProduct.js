import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import Product from 'component/product/Product'
import { css } from "@emotion/core";
import ClipLoader from "react-spinners/ClipLoader";
const override = css`
  display: block;
  margin: auto;
  border-color: red;
`;
function HotProduct(props) {
  const { hotProducts, hotProductsIsFetching } = useSelector(({ featureProductsReducer }) => featureProductsReducer)
  return (
    <>
      <div className="hot-products" style={{ marginTop: '4rem' }}>
        <div>
          <h1 className="main__heading">PHỔ BIẾN</h1>
          <div className="main__heading-line"></div>
          <img className="main__heading-img" src={'https://theme.hstatic.net/1000239816/1000467243/14/icon_featured.png?v=186'}></img>
        </div>
        <div className="row no-gutter products-content">
          {
            hotProducts && hotProducts.length > 0 ?
              hotProducts.map((product, index) => <Product key={index} index={index} product={product} />)
              : ""
          }
        </div>
      </div>
    </>
  );
}

export default HotProduct;