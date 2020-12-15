import React from 'react';
import Category from 'component/main/category/Category'
import HotProduct from 'component/main/hotProduct/HotProduct'
import FeatureProduct from 'component/main/featureProduct/FeatureProduct'
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