import React from 'react';
import "./Navbar.css";

const Navbar = () => {
    return (
        <header className="header">
            <div className="container">
                <div className="header_inner">
                    <div className="user">
                        <img className="user-avatar" src='../images/avatar_photo.png' alt="sorry"/>
                        <div className="user_content">
                            <div className="user_name">Vladislav <br/> Bulakhov</div>
                            <div className="user_prof">Front Web Developer</div>
                        </div>
                    </div>
                    <div className="nav">
                        <a className="nav_link" href="#">work</a>
                        <a className="nav_link" href="#">about me</a>
                        <a className="nav_link" href="#">blog</a>
                        <a className="nav_link" href="#">contact</a>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Navbar;