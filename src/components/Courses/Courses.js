import React from 'react';
import "./Courses.css";

const Courses = ({props}) => {
    return (
        <div className="courses" ref = {props}>
            <div className="container">
                <h3 className="text_center margin">My courses</h3>
                <div className="subtitle">Make the most of yourself...for that is all there is of you</div>
                <div className="courses_inner">
                    <div className="course">
                        <img className="courses_photo" src="images/reactcourse.jpeg" alt=""/>
                        <div className="course_content">
                            <h4 className="course_name">React JS. Practical course</h4>
                            <div className="course_cat">WEB DEVELOPMENT</div>
                            <div className="course_text">
                                <p>The main part of the course includes 108 lessons with a total duration of 16 hours, which contains all the necessary theoretical base for mastering React.js, Redux, some hooks from scratch (including JavaScript basics)!

                                    With the correct use of the instructions and techniques from the course, you will learn how to create dynamic, reactive, fully responsive SPA applications and websites using the React.js library using visual examples from scratch.</p>
                            </div>
                        </div>
                        <div className="link">
                            <a href="https://www.udemy.com/course/react-2020-complete-guide/?persist_locale=&locale=en_US" target="_blank" rel="noreferrer">
                                <button className="btn_show_more">SHOW MORE</button>
                            </a>
                        </div>
                    </div>
                    <div className="course">

                        <img className="courses_photo" src="images/js.jpg" alt=""/>

                        <div className="course_content">
                            <h4 className="course_name">Java Script.</h4>
                            <div className="course_cat">WEB DEVELOPMENT</div>
                            <div className="course_text">
                                <p>This course is aimed at learning JavaScript in detail, but the main thing is its immediate application in practice.
                                    You will learn modern JavaScript from the very beginning, step by step, using practical and interesting code examples,
                                    important theory about how JavaScript works under the hood, as well as many practical tasks.
                                    You will not only learn the JavaScript language, but also learn how to solve problems, learn how to structure and organize code.
                                </p>
                            </div>
                        </div>
                        <div className="link">
                            <a href="https://www.udemy.com/course/javascript_full/" target="_blank" rel="noreferrer">
                                <button className="btn_show_more">SHOW MORE</button>
                            </a>
                        </div>
                    </div>
                    <div className="course">
                        <img className="courses_photo" src="images/Python.jpg" alt=""/>
                        <div className="course_content">
                            <h4 className="course_name">Python. Practical course</h4>
                            <div className="course_cat">WEB DEVELOPMENT</div>
                            <div className="course_text">
                                <p>
                                    A practical course on learning the Python programming language from MIPT. It lasts 1.5 months with 5-7 hours of classes per week. In the program: mastering the data structure, object-oriented programming, classes, tracking and testing your programs. To receive a certificate, students will develop a project where they will apply the theory they have received. Feedback from the teacher for each task.
                                </p>
                            </div>
                        </div>
                        <div className="link">
                            <a href="https://mooc.ru/courses/diving-in-python-coursera" target="_blank" rel="noreferrer">
                                <button className="btn_show_more">SHOW MORE</button>
                            </a>
                        </div>
                    </div>
                    <div className="course">
                        <img className="courses_photo" src="images/learn-english-online.jpg" alt=""/>
                        <div className="course_content">
                            <h4 className="course_name">Speak English Professionally: In Person, Online</h4>
                            <div className="course_cat">ENGLISH SKILL</div>
                            <div className="course_text">
                                <p>
                                    Speak English Professionally: In person, Online and On the Phone will boost your English speaking skills.
                                    In this 5 week course, you will learn how to identify and make a strong personal introduction.
                                    You will develop and demonstrate the speaking skills for group discussions: how to agree or disagree, how to clarify, restate and summarize.
                                </p>
                            </div>
                        </div>
                        <div className="link">
                            <a href="https://www.coursera.org/learn/speak-english-professionally" target="_blank" rel="noreferrer">
                                <button className="btn_show_more">SHOW MORE</button>
                            </a>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Courses;