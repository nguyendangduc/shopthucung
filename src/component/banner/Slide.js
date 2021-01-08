import React, {useEffect} from 'react';

function Slide(props) {
    return (
        <>
            <div className="slide" id-side={props.index}>
                <div className="row slide-content">
                    <div className="col l-6 m-6 c-12">
                        <div className="slide__info">
                            <h1 className="slide__title">{props.slide.title}</h1>
                            <h2 className="slide__name">{props.slide.name}</h2>
                            <a href={props.slide.link} className="slide__btn">Xem chi tiết</a>
                        </div>
                    </div>
                    <div className="col l-6 m-6 c-12 slide-content__col">
                        <img className="slide__img--default" src="./assets/img/home/banner-default.png" alt="" />
                        <img className="slide__img" src={props.slide.image} alt="" />
                    </div>
                </div>
            </div>
        </>
    );
}

export default Slide;