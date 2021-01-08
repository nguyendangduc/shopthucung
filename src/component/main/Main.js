import React from 'react';
import Category from 'component/category/Category';
import HotProduct from 'component/main/HotProduct'
import FeatureProduct from 'component/main/FeatureProduct'
function Main(props) {
  return (
    <>
      <div className="main">
        <div className="grid">
          <div className="row">
            <Category />
            <FeatureProduct />
          </div>
          <HotProduct />

        </div>
      </div>
    </>
  );
}

export default Main;