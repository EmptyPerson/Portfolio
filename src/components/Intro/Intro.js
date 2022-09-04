import React, {useContext} from 'react';
import './Intro.css'
import {ModalContext} from "../../Context";

const Intro = () => {
    const {modalActive, setModalActive} = useContext(ModalContext)

    return (
        <div className="intro">
            <div className="container">
                <div className="intro_inner">
                    <div className="intro_content">
                        <h2 className="intro_subtitle">Hello I'm</h2>
                        <h1 className="intro_title">Bulakhov Vladislav</h1>
                        <div className="intro_text">Frontend Web Developer</div>
                        <div className="social">
                            <a className="social_link" href="https://t.me/seenager" target="_blank" rel="noreferrer">
                                <img src="images/telegram.svg" alt="" className='git_favicon'/>
                            </a>
                            <a className="social_link" href="https://www.facebook.com/profile.php?id=100006243310002" target="_blank" rel="noreferrer">
                                <img src="images/facebook.png" alt=""/>
                            </a>
                            <a className="social_link" href="https://instagram.com/bulakhov.v" target="_blank" rel="noreferrer">
                                <img src="images/instagram.png" alt=""/>
                            </a>
                            <a className="social_link" href="https://github.com/EmptyPerson" target="_blank" rel="noreferrer">
                                <img src="images/github.svg" alt="" className='git_favicon'/>
                            </a>
                        </div>

                        <button className="btn" type="button" onClick={(e) => {
                            e.preventDefault()
                            setModalActive(!modalActive)
                        }
                        }>SEE MY RESUME</button>
                    </div>
                    <div className='photo-container'>
                        <img className="intro_photo" src="images/photo.png" alt=""/>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Intro;