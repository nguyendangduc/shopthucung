import React, { useEffect, useState } from 'react';
import { set_info_pagination_request } from 'store/actions/product/productAction'
import { useDispatch, useSelector } from 'react-redux'
function Pagination(props) {
    const { totalPage, idPage, perPage } = useSelector(({ featureProductsReducer }) => featureProductsReducer.infoPage)
    const dispatch = useDispatch()
    const changePage = (indexPage) => {
        return (event) => {
            dispatch(set_info_pagination_request(indexPage, props.quantity, perPage))
        }
    }
    const handleChange = (event) => {
        const { value } = event.target
        dispatch(set_info_pagination_request(1, props.quantity, value))

    }

    useEffect(() => {
        //update btn
        if (totalPage > 0) {
            const btnPrev = document.querySelector("#pagination .btn-prev")
            const btnNext = document.querySelector("#pagination .btn-next")
            btnPrev.classList.remove('btn-disable');
            btnNext.classList.remove('btn-disable');
            if (idPage == 1) {
                btnPrev.classList.add('btn-disable');
            }
            if (idPage == totalPage) {
                btnNext.classList.add('btn-disable');
            }
            //updateNav
            document.querySelectorAll("#pagination .number-page li.active").forEach(e => e.classList.remove("active"))
            document.querySelectorAll("#pagination .number-page li")[idPage - 1].classList.add('active')
        }
    }, [perPage, idPage])
    const pageList = () => {
        let listItem = []
        if (totalPage > 0) {
            listItem = [...listItem, <li key={1} className="active" onClick={changePage(1)}>1</li>]
            for (let i = 2; i <= totalPage; i++) {
                listItem = [...listItem, <li key={i} onClick={changePage(i)}>{i}</li>]
            }
        }
        return listItem
    }
    const prev = () => {
        let _idPage = idPage - 1
        if (_idPage < 1)
            _idPage = 1
        dispatch(set_info_pagination_request(_idPage, props.quantity, perPage))
    }
    const next = () => {
        let _idPage = idPage + 1
        if (_idPage > totalPage)
            _idPage = totalPage
        dispatch(set_info_pagination_request(_idPage, props.quantity, perPage))
    }
    return (
        <>
            <div id="pagination">
                <div className="page">
                    <ul style={{ display: 'flex' }}>
                        <li className="btn-prev btn-disable fas fa-angle-left" onClick={prev} />
                        <div className="number-page" id="number-page">
                            {pageList()}
                        </div>
                        <li className="btn-next fas fa-angle-right" onClick={next} />


                    </ul>
                </div>
                <select className="page__slt" name="sltPerPage" value={perPage} onChange={handleChange}>
                    <option value={16}>16 Product</option>
                    <option value={20}>20 Product</option>
                    <option value={24}>24 Product</option>

                </select>
            </div>
        </>
    );
}

export default Pagination;

//js dung forEach/ for(..)/ map&& join('')   return string
//react dung map return 1 [] trong jsx/ dung forEach or for(...) roi them vao [...,] roi         return []