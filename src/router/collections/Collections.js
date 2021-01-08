import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux'
import Header from 'component/header/Header'
import Category from 'component/category/Category'
import Footer from 'component/footer/Footer'
import ModalRoot from 'component/modal/ModalRoot'
import Products from 'component/products/Products'
import {handle_task_request} from 'store/actions/product/productAction'
import {useParams, useLocation} from 'react-router-dom'

function Collections(props) {
    const location = useLocation()
    const path = location.pathname
    const dispatch = useDispatch()
    const {idCate} = useParams()
    useEffect(() => {
        dispatch(handle_task_request({
            handingType: "filter",
            handingPayload: {
                filterBy: 'category',
                val: idCate
            }
        }))
    }, [path])


    return (
        <>
            <div id="home">
                <Header />
                <div className="main" style={{margin:"3rem 0"}}>
                    <div className="grid">
                        <div className="row">
                            <Category />
                            <Products />
                        </div>
                    </div>
                </div>
                <Footer />
                <ModalRoot />
                
            </div>
        </>
    );
}

export default Collections;