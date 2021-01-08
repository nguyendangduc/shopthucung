import React from 'react';

function MenuLeft(props) {
    return (
        <>
            <div className="col l-2 m-4 c-0">
                            <div className="menu-left">
                                <div className="profile">
                                    <div className="profile-img-wrap">
                                        <div className="profile-img" />
                                    </div>
                                    <div className="profile-name-wrap">
                                        <p className="profile-name">nguyen dang duc</p>
                                        <a href className="profile-edit">
                                            <span className="ti-pencil" />
                                        Sửa hồ sơ
                                        </a>
                                    </div>
                                </div>
                                <ul className="menu-left__list">
                                    <li className="menu-left__item">
                                        <a href="#" className="menu-left__link">
                                            <i className="far fa-user" />
                                            <span>Tài khoản của tôi</span>
                                        </a>
                                    </li>
                                    <li className="menu-left__item">
                                        <a href="#" className="menu-left__link">
                                            <i className="far fa-calendar-minus" />
                                            <span>Đơn mua</span>
                                        </a>
                                    </li>
                                    <li className="menu-left__item">
                                        <a href="#" className="menu-left__link">
                                            <i className="far fa-bell" />
                                            <span>Thông báo</span>
                                        </a>
                                    </li>
                                    <li className="menu-left__item">
                                        <a href="#" className="menu-left__link">
                                            <i className="fas fa-wallet" />
                                            <span>Ví Voucher</span>
                                        </a>
                                    </li>
                                    <li className="menu-left__item">
                                        <a href="#" className="menu-left__link">
                                            <i className="fas fa-dollar-sign" />
                                            <span>Shop xu</span>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
        </>
    );
}

export default MenuLeft;