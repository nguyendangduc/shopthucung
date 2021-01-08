import React from 'react';
import { ContainerModals } from './ContainerModals'
import { useSelector } from 'react-redux'
function ModalRoot(props) {
    const { modal } = useSelector(({ modalReducer }) => modalReducer)
    const MainModal = ContainerModals[modal]//modal init = '' => MainModal = undefine
    return (
        <>
            {
                MainModal ?
                    <div className="modal">
                        <div className="modal__overlay" />
                        <div className="modal__body" data-auth>
                            <MainModal />
                        </div>
                    </div>
                    : ''
            }
        </>
    );

}

export default ModalRoot;