import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { Link, withRouter, useParams } from 'react-router-dom';
import { get_detail_request } from 'store/actions/product/productAction'
import {add_cart} from 'store/actions/product/productAction'
const DetailComponent = (props) => {
  // console.log(props)
  let [quantity, setQuantity] = useState(1)
  const dispatch = useDispatch()
  // const {id} = useParams()
  // console.log(id)
  const { productDetail } = useSelector(({ featureProductsReducer }) => featureProductsReducer)
  useEffect(() => {//dat vo trong de khi quantity thay doi k bi doc lai
    const urlString = window.location.href
    const url = new URL(urlString)
    const id = url.searchParams.get("id")
    //state quantity thay doi nhung ham useEffect chi render 1 lan
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

  const addCart = (id) => {
    let total = quantity * productDetail.price * (1 - productDetail.sale / 100)
    total = Math.round(total *100)/100 
    const cartItem = {
      ...productDetail,
      quantity: quantity,
      total: total
    }
    const cart = {...JSON.parse(window.localStorage.getItem("cart"))}
    if(cart[id]) {
      cart[id].quantity += quantity
      cart[id].total += total 
    } else {
      cart[id] = cartItem
    }
    window.localStorage.setItem("cart", JSON.stringify(cart)) 
    const {history} = props
    history.push("/cart")
    // window.location.href = "/cart"

  }
  return (
    <>
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
                        <button onClick={() => addCart(productDetail.id)} className="btn btn-primary">Thêm vào giỏ hàng</button>
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
    </>
  );
};
export default withRouter(DetailComponent);