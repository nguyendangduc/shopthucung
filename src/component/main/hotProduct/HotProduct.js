import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import {get_hot_product_request} from 'store/actions/product/productAction'
import Product from 'component/product/Product'

function HotProduct(props) {
  const dispatch = useDispatch()
  const {hotProducts} = useSelector(({featureProductsReducer}) => featureProductsReducer)
  useEffect(() => {
    dispatch(get_hot_product_request())
  }, [])
  return (
    <>
      <div className="hot-products" style={{ marginTop: '4rem' }}>
        <h1 className="main__heading">Hot Product</h1>
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