import React from 'react';
import "./Modal.css";
import {useContext} from "react";
import {ModalContext} from "../../Context";

const Modal = () => {
    const {modalActive, setModalActive} = useContext(ModalContext)

    return (
        <div className={modalActive ? "modal show": "modal"} onClick={() => setModalActive(false)}>
            <div className="modal_dialog" onClick={(e) => e.stopPropagation()}>
                <div className="cl-btn-2" onClick={() =>
                    setModalActive(false)
                }>
                    <div>
                        <div className="leftright"></div>
                        <div className="rightleft"></div>

                    </div>
                </div>
                <h3 className="modal_title">RESUME</h3>
                <img className="modal_photo" src="images/resume.jpg" alt=""/>
                <a className="btn_cv" href="images/resume.pdf" download>Download</a>
            </div>
        </div>
    );
};

export default Modal;