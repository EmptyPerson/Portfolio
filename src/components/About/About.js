import React, {useContext} from 'react';
import './About.css'
import {ModalContext} from "../../Context";

const About = ({props}) => {
    const {modalActive, setModalActive} = useContext(ModalContext)

    return (
        <div className="about" ref = {props}>
            <div className="container">
                <div className="about_inner">
                    <div className="about_photo_container">
                        <div className="wrapper_about_photo">
                        <img src="images/about.jpg" alt="" className="about_photo"/>
                        </div>
                    </div>
                    <div className="about_content">
                        <h3 className="about_title">about me</h3>
                        <h2 className="about_bigtitle">who i am</h2>
                        <div className="about_text">
                            <p>
                                Front End Developer with around 1 plus years of experience. Extensive experiences in HTML5, CSS3, SASS(SCSS), jQuery, React, React-router, Redux, Node (NPM), Bootstrap.JS (little bit).
                            </p>
                            <p>
                                Good knowledge and experience of data base technology. Near 3 years of experience in writing SQL requests and PL/sql scripts with Oracle data base.
                            </p>
                            <p>
                                Basic knowledge of Go lang, Python, Design, Development, Testing, and Implementation of Applications, Application Maintenance.
                            </p>
                        </div>
                        <button type="button" className="btn" onClick={(e) => {
                            e.preventDefault()
                            setModalActive(!modalActive)
                        }
                        }>
                            see my resume
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;