import React from 'react';
import "./Footer.css";

const Footer = ({props}) => {
    return (
        <footer className="footer">
            <div className="container">
                <div className="footer_inner">
                    <div className="footer_info">
                        <div className="footer_copyright">
                            &copy; 2022 - Vladislav Bulakhov
                        </div>
                        <div className="footer_social">
                            <a href="https://t.me/seenager" className="footer_link" target="_blank" rel="noreferrer">
                                <img src="images/telegram_icon.svg" alt="" className="icons_svg"/>
                            </a>
                            <a href="https://www.facebook.com/profile.php?id=100006243310002" className="footer_link" target="_blank" rel="noreferrer">
                                <img src="images/facebook_icon.png" alt="" />
                            </a>
                            <a href="https://instagram.com/bulakhov.v" className="footer_link" target="_blank" rel="noreferrer">
                                <img src="images/instagram_icon.png" alt="" />
                            </a>
                            <a href="https://github.com/EmptyPerson" className="footer_link" target="_blank" rel="noreferrer">
                                <img src="images/github_icon.svg" alt="" className="icons_svg"/>
                            </a>
                        </div>
                    </div>
                    <div className="footer_nav">
                        <a className="footer_nav_link" href="work" onClick={(event) => {
                            event.preventDefault()
                            props.scrollToSection(props.refWork)
                        }}>Work</a>
                        <a className="footer_nav_link" href="about" onClick={(event) => {
                            event.preventDefault()
                            props.scrollToSection(props.refAbout)
                        }}>About me</a>
                        <a className="footer_nav_link" href="blog" onClick={(event) => {
                            event.preventDefault()
                            props.scrollToSection(props.refBlog)
                        }}>Blog</a>
                        <a className="footer_nav_link" href="mailto:vladislav.bulahov@gmail.com">Contact</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;