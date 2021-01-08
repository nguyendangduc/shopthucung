import React,{ useEffect} from 'react';
import {useDispatch} from 'react-redux'
import Header from 'component/header/Header'
import Banner from 'component/banner/Banner'
import Main from 'component/main/Main'
import Footer from 'component/footer/Footer'
import ModalRoot from 'component/modal/ModalRoot'
import {get_category_request, get_category_success} from 'store/actions/categoryAction'
import { get_feature_product_request, get_feature_product_success}  from 'store/actions/product/productAction'
import {get_hot_product_request,get_hot_product_success} from 'store/actions/product/productAction'
import { get_slider_request, get_slider_success } from 'store/actions/sliderAction'
import RequestUtils from 'utils/RequestUtils'
import axios from 'axios'
import {GATEWAY,API} from 'const'
function Home(props) {
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(get_category_request())
            dispatch(get_feature_product_request())
            dispatch(get_hot_product_request())
            dispatch(get_slider_request())
        // Promise.all([
        //     axios.get(GATEWAY+API.SLIDE),
        //     axios.get(GATEWAY+API.CATEGORY),
        //     axios.get(GATEWAY+API.PRODUCT_ALL),
        //     axios.get(GATEWAY+API.HOT_PRODUCT),
        // ]).then(resArray => {
        //     return resArray.map(res => res.data)
        // }).then(dataArr => {
        //     return {
        //         slide: dataArr[0],
        //         category: dataArr[1],
        //         productAll: dataArr[2],
        //         hotProduct: dataArr[3]
        //     }
        // }).then(homeData => {
        //         // dispatch(get_hot_product_success(homeData.hotProduct))
        //         dispatch(get_category_success(homeData.category))
        //         dispatch(get_feature_product_success(homeData.productAll))
        //         dispatch(get_slider_success(homeData.slide))
        // })
    },[])
        
      
    return (
        <>
            <div id="home">
                <Header />
                <Banner />
                <Main />
                <Footer />
                <ModalRoot />
            </div>
        </>
    );
}

export default Home;