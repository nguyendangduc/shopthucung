import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { get_category_request } from 'store/actions/categoryAction'
import { useHistory } from 'react-router-dom'

function Category(props) {
  const history = useHistory()
  const dispatch = useDispatch()
  let { categories } = useSelector(({categoryReducer}) => categoryReducer)
  useEffect(() => {
    dispatch(get_category_request())

  }, [])  
  const filter = (idCate) => {
    history.push({'pathname': `/collections/${idCate}`})
  }
  const categoryList = (cates) => {
    return cates && cates.length > 0 ?
      cates.map((cate, index) => (
        <li key={index} className="category__item" onClick={() => filter(cate.id)}>
          <a className="category__link">{cate.name}</a>
        </li>
      ))
      : ''
  }
  return (
    <>
      <div className="col l-3 m-3 c-12">
        <div className="category">
          <h1 className="main__heading">Category</h1>
          <ul className="category__list">
            <li className="category__item" onClick={() => filter("all")}>
              <a className="category__link">Tất cả</a>
            </li>
            {categoryList(categories)}
          </ul>
          <a href="#" className="hot-item hidden-on-mobile">
            <img src="https://cdn5.vectorstock.com/i/1000x1000/18/79/pets-poster-placard-domestic-animals-cats-dogs-vector-26551879.jpg" alt="" />
          </a>
        </div>
      </div>
    </>
  );
}

export default Category;