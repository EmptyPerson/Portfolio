import React from 'react';
import './Work.css';

const Work = ({props}) => {
    return (
        <div className="works" ref = {props}>
            <div className="container">
                <h3 className='text_center'>My projects</h3>
                <div className="portfolio">
                    <a href="https://roadhomezn.web.app" className="project-link" target="_blank" rel="noreferrer">
                    <div className="work">
                        <div className="work_logo">
                            <h2 className='work_name'>HOTEL</h2>
                        </div>
                        <div className="work_content">
                            <div className="work_cat">category: website</div>
                            <div className="work_title">
                                HOTEL
                                <div className="work_data">2022</div>
                            </div>
                        </div>

                    </div>
                    </a>
                    <a href="https://react-quiz-62b52.firebaseapp.com/" className="project-link" target="_blank" rel="noreferrer">
                        <div className="work">
                            <div className="work_logo">
                                <h2 className='work_name'>QUIZ</h2>
                            </div>
                            <div className="work_content">
                                <div className="work_cat">category: website</div>
                                <div className="work_title">
                                    Quiz
                                    <div className="work_data">2022</div>
                                </div>
                            </div>
                        </div>
                    </a>
                    <a href="https://emptyperson.github.io/GraphCoins/" className="project-link" target="_blank" rel="noreferrer">
                        <div className="work">
                            <div className="work_logo">
                                <h2 className='work_name'>crypto<br/>charts</h2>
                            </div>
                            <div className="work_content">
                                <div className="work_cat">category: website</div>
                                <div className="work_title">
                                    crypto charts
                                    <div className="work_data">2021</div>
                                </div>
                            </div>
                        </div>
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Work;