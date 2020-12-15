import React, { useEffect } from 'react';
import Product from 'component/product/Product'
import HandingTask from '../handingTask/HandingTask'
import { useDispatch, useSelector } from 'react-redux'
import { get_feature_product_request,set_info_pagination_request } from 'store/actions/product/productAction'
import Pagination from '../../panination/Pagination'
function FeatureProduct(props) {
  const dispatch = useDispatch()
  let { featureProducts, infoPage } = useSelector(({ featureProductsReducer }) => featureProductsReducer)
  let { perPage, idPage, start, end, totalPage } = infoPage
  useEffect(() => {
    
    dispatch(get_feature_product_request())

  }, [])
  useEffect(() => {
    
    dispatch(set_info_pagination_request(1, featureProducts.length,infoPage.perPage))//idPage, quantity

  }, [featureProducts])
  console.log(infoPage)
  return (
    <>
      <div className="col l-9 m-9 c-12 main__menu-left">
        <div className="feature-products">
          <HandingTask />
          <h1 className="main__heading">New Product</h1>
          <div className="row no-gutter products-content">
            {
              featureProducts && featureProducts.length > 0 ?
                featureProducts.map((product, index) => {
                  if (index >= start && index < end) {
                    return <Product key={index} index={index} product={product} />
                  }
                })
                : ""
            }
          </div>
          {totalPage > 0 ? <Pagination quantity = {featureProducts.length} infoPage={infoPage} /> : ''}
        </div>
      </div>
    </>
  );
}

export default FeatureProduct;