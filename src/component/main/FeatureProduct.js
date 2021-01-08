import React, { useEffect } from 'react';
import Product from 'component/product/Product'
import { useDispatch, useSelector } from 'react-redux'
import { set_info_pagination_request } from 'store/actions/product/productAction'
import Pagination from '../panination/Pagination'
import {Link} from 'react-router-dom'
import { css } from "@emotion/core";
import ClipLoader from "react-spinners/ClipLoader";
const override = css`
  display: block;
  margin: auto;
  border-color: red;
  
`;
const xem_them = {
  float: "right",
  color: "rgb(56, 56, 56)",
  fontSize: "1.6rem",
  cursor:"pointer",
 
}
function FeatureProduct(props) {
  const dispatch = useDispatch()
  let { featureProducts, infoPage, featureProductsIsFetching } = useSelector(({ featureProductsReducer }) => featureProductsReducer)
  useEffect(() => {

    dispatch(set_info_pagination_request(1, featureProducts.length, infoPage.perPage))//idPage, quantity

  }, [featureProducts])
  return (
    <>
      <div className="col l-9 m-9 c-12 main__menu-left">
        <div className="feature-products">
          <div>
          <h1 className="main__heading">SẢN PHẨM MỚI</h1>
          <div className="main__heading-line"></div>
          <img className="main__heading-img" src={'https://theme.hstatic.net/1000239816/1000467243/14/icon_featured.png?v=186'}></img>
        </div>
          <div className="row no-gutter products-content">
            {featureProductsIsFetching ?
              <ClipLoader css={override} size={70} /> :
              featureProducts && featureProducts.length > 0 ?
                featureProducts.map((product, index) => {
                  if (index >= 0 && index < 8) {
                    return <Product key={index} index={index} product={product} />
                  }
                })
                : ''
            }
          </div>
          <Link to={`/collections/all`}>
          <span style={xem_them} >Xem thêm <span style={{position:'relative',top:"2px"}} className="ti-arrow-circle-right"></span></span>
          </Link>
        </div>
      </div>
    </>
  );
}

export default FeatureProduct;