import React, { useEffect } from 'react';
import Product from 'component/product/Product'
import HandingTask from 'component/handingTask/HandingTask'
import { useDispatch, useSelector } from 'react-redux'
import { get_feature_product_request, set_info_pagination_request } from 'store/actions/product/productAction'
import Pagination from '../panination/Pagination'
import { css } from "@emotion/core";
import ClipLoader from "react-spinners/ClipLoader";
const override = css`
  display: block;
  margin: auto;
  border-color: red;
  
`;
function Products(props) {
  const dispatch = useDispatch()
  let { featureProducts, infoPage, featureProductsIsFetching } = useSelector(({ featureProductsReducer }) => featureProductsReducer)
  let { perPage, idPage, start, end, totalPage } = infoPage
  useEffect(() => {

    dispatch(set_info_pagination_request(1, featureProducts.length, infoPage.perPage))//idPage, quantity

  }, [featureProducts])
  return (
    <>
      <div className="col l-9 m-9 c-12 main__menu-left">
        <div className="feature-products">
          <HandingTask />
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
                  if (index >= start && index < end) {
                    return <Product key={index} index={index} product={product} />
                  }
                })
                : ''
            }
          </div>
          {totalPage > 0 ? <Pagination quantity={featureProducts.length} /> : ''}
        </div>
      </div>
    </>
  );
}

export default Products;