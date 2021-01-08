import React, { useEffect, useState } from 'react'
import Header from 'component/header/Header'
import Footer from 'component/footer/Footer'
import ModalRoot from 'component/modal/ModalRoot'
import { useDispatch, useSelector } from 'react-redux'
import { Link, withRouter, useParams } from 'react-router-dom';
import { get_detail_request } from 'store/actions/product/productAction'
import {add_cart} from 'store/actions/product/productAction'

function Detail(props) {
    let [quantity, setQuantity] = useState(1)
  const dispatch = useDispatch()
  // const params = useParams()
  // const id = params.id
  const {id} = useParams()
  const { productDetail } = useSelector(({ featureProductsReducer }) => featureProductsReducer)
  useEffect(() => {//dat vo trong de khi quantity thay doi k bi doc lai
    // const urlString = window.location.href
    // const url = new URL(urlString)
    // const id = url.searchParams.get("id")
    
    // const id = props.match.params.id
    dispatch(get_detail_request(id))
  }, [])
  const changeQuantity = (id, param) => {
    let q = quantity
    if (param === 1) {
      q++
    } else if (param === -1) {
      q--
      if (q === 0) {
        q = 1
      }
    }
    setQuantity(q)
  }

  const addCart = () => {
   
    dispatch(add_cart(productDetail.id, quantity))
    const {history} = props
    history.push("/cart")
    // window.location.href = "/cart"
  }

    return (
        <>
            <div id="detail">
                <Header />
                <div className="main">
        <div className="grid">
          <div className="row detail-content">
            <div className="col l-12">
              <div className=" row product-details" id="product-information">
                <div className="col l-5 m-12 c-12">
                  <div className="view-product">
                    <img style={{ width: '100%' }} src={productDetail.image} alt="" />
                  </div>
                </div>
                <div className="col l-7 m-12 c-12 product-content">
                  <div className="row" style={{ width: '100%' }}>
                    <div className="col l-6 m-12 c-12">
                      <div className="product-information">
                        <h2> {productDetail.name}</h2>
                        <p className="id">ID: ${productDetail.id}</p>
                        <p className="date"><b>Ngày đăng:</b> {productDetail.createAt}</p>
                        <p className="category"><b>Danh mục:</b> {productDetail.name}</p>
                        <p className="price"><b>Giá: </b>{productDetail.price}</p>
                        <p className="sale"><b>Giảm giá: </b>{productDetail.sale}</p>
                        <p className="quantity" data-id={quantity}><b>Số lượng:</b> {quantity}</p>
                        <div className="btn-wrap">
                          <button className="btn btn-increase" onClick={() => changeQuantity(productDetail.id, 1)}>+</button>
                          <button className="btn btn-reduce" onClick={() => changeQuantity(productDetail.id, -1)}>-</button>
                        </div>
                        <button onClick={() => addCart()} className="btn btn-primary">Thêm vào giỏ hàng</button>
                      </div>
                    </div>
                    <div className="col l-6 m-12 c-12">
                      <div className="product-description">
                        <div className="bar bar1" />
                        <div className="bar bar2" />
                        <div className="bar bar3" />
                        <div className="bar bar4" />
                        <h2>Mô tả</h2>
                        <p>{productDetail.des}</p>
                      </div>
                      <div>
                      </div>
                    </div>
                  </div>
                </div>
              </div></div>
          </div>
        </div>
      </div>
                <Footer />
                <ModalRoot />
            </div>
        </>
    );
}

export default Detail;