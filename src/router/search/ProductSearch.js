import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux'
import Header from 'component/header/Header'
import Category from 'component/category/Category'
import Footer from 'component/footer/Footer'
import ModalRoot from 'component/modal/ModalRoot'
import Products from 'component/products/Products'
import {handle_task_request} from 'store/actions/product/productAction'
import {useParams} from 'react-router-dom'
import {withRouter} from 'react-router-dom'
function ProductSearch(props) {
    const dispatch = useDispatch()
    const {keyword} = useParams()
    useEffect(() => {
        dispatch(handle_task_request({
            handingType: "search",
            handingPayload: keyword
        }))
    }, [props.location.pathname])// path thay dooi -> dispatch update products

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

export default withRouter(ProductSearch);