import React from 'react';
import './Work.css';

const Work = ({props}) => {
    return (
        <div className="works" ref={props}>
            <div className="container">
                <h3 className='text_center'>My projects</h3>
                <div className="portfolio">
                    <div className="work">
                        <a href="https://hackerstoriesapp.web.app" className="project-link" target="_blank"
                           rel="noreferrer">
                            <div className="work_logo">
                                <h2 className='work_name'>HACKER<br/>NEWS</h2>
                            </div>
                            <div className="work_content">
                                <div className="work_cat">category: website</div>
                                <div className="work_title">
                                    Latest Hackers News
                                    <div className="work_data">2022</div>
                                </div>
                            </div>
                        </a>
                    </div>
                    <div className="work">
                        <a href="https://jsontotreeapp.web.app/" className="project-link" target="_blank"
                           rel="noreferrer">
                            <div className="work_logo">
                                <h2 className='work_name'>JSON <br/>TO TREE</h2>
                            </div>
                            <div className="work_content">
                                <div className="work_cat">category: website</div>
                                <div className="work_title">
                                    Convert, change JSON in Tree structure
                                    <div className="work_data">2022</div>
                                </div>
                            </div>
                        </a>
                    </div>


                    <div className="work">
                        <a href="https://roadhomezn.web.app" className="project-link" target="_blank" rel="noreferrer">
                            <div className="work_logo">
                                <h2 className='work_name'>HOTEL</h2>
                            </div>
                            <div className="work_content">
                                <div className="work_cat">category: website</div>
                                <div className="work_title">
                                    Hotel model
                                    <div className="work_data">2022</div>
                                </div>
                            </div>
                        </a>
                    </div>


                    <div className="work">
                        <a href="https://react-quiz-62b52.firebaseapp.com/" className="project-link" target="_blank"
                           rel="noreferrer">
                            <div className="work_logo">
                                <h2 className='work_name'>QUIZ</h2>
                            </div>
                            <div className="work_content">
                                <div className="work_cat">category: website</div>
                                <div className="work_title">
                                    Make your quiz's
                                    <div className="work_data">2022</div>
                                </div>
                            </div>
                        </a>
                    </div>
                    <div className="work">
                        <a href="https://emptyperson.github.io/GraphCoins/" className="project-link" target="_blank"
                           rel="noreferrer">
                            <div className="work_logo">
                                <h2 className='work_name'>crypto<br/>charts</h2>
                            </div>
                            <div className="work_content">
                                <div className="work_cat">category: website</div>
                                <div className="work_title">
                                    Make crypto charts
                                    <div className="work_data">2021</div>
                                </div>
                            </div>
                        </a>
                    </div>
                    <div className="work">
                        <a href="https://scooter-rental-bali.web.app/" className="project-link" target="_blank"
                           rel="noreferrer">
                            <div className="work_logo">
                                <h2 className='work_name'>scooter<br/>rental</h2>
                            </div>
                            <div className="work_content">
                                <div className="work_cat">category: website</div>
                                <div className="work_title">
                                    Freelance task. Website for scooter rental
                                    <div className="work_data">2023</div>
                                </div>
                            </div>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Work;