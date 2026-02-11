import React from 'react'
import { Link } from 'react-router-dom'
import Logo from '../../images/Advisory logo.png' 

const ClickHandler = () => {
    window.scrollTo(10, 0);
}

const SubmitHandler = (e) => {
    e.preventDefault()
}

const Footer = (props) => {
    return (
        <footer className="site-footer">
            <div className={`upper-footer ${props.ftClass}`}>
                <div className="container">
                    <div className="row">
                        <div className="col col-lg-4 col-md-6 col-sm-12 col-12">
                            <div className="widget about-widget">
                                <div className="logo ">
                                    <img src={Logo} alt="blog" />
                                </div>
                                <p> Delivering holistic solutions for ethical financial growth.</p>
                                <div className="social-widget">
                                    <ul>
                                        <li><Link onClick={ClickHandler} to="/"><i className="ti-facebook"></i></Link></li>
                                        <li><Link onClick={ClickHandler} to="/"><i className="ti-twitter-alt"></i></Link></li>
                                        <li><Link onClick={ClickHandler} to="/"><i className="ti-linkedin"></i></Link></li>
                                        <li><Link onClick={ClickHandler} to="/"><i className="ti-instagram"></i></Link></li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        <div className="col col-lg-4 col-md-6 col-sm-12 col-12">
                            <div className="widget link-widget s2">
                                <div className="widget-title">
                                    <h3>Quick Links</h3>
                                </div>
                                <ul>
                                    <li><Link onClick={ClickHandler} to="/home">Home</Link></li>
                                    <li><Link onClick={ClickHandler} to="/about">About Us</Link></li>
                                    <li><Link onClick={ClickHandler} to="/services">Services</Link></li>
                                    <li><Link onClick={ClickHandler} to="/contact">Contact Us</Link></li>

                                    {/* <li><Link onClick={ClickHandler} to="/donate">Donate</Link></li>
                                    <li><Link onClick={ClickHandler} to="/about">Destinations</Link></li> */}
                                </ul>
                            </div>
                        </div>
                        <div className="col col-lg-4 col-md-6 col-sm-12 col-12">
                            <div className="widget newsletter-widget">
                                <div className="widget-title">
                                    <h3>Newsletter</h3>
                                </div>
                                <form onSubmit={SubmitHandler}>
                                    <input type="email" className="form-control" name="mail" id="mail"
                                        placeholder="Your Email..." />
                                    <input className="theme-btn" type="submit" value="Subscribe" />
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="lower-footer">
                <div className="container">
                    <div className="row g-0">
                        <div className="col col-lg-6 col-12">
                            <p className="copyright"> Copyright &copy; 2025 MTJ Advisory by <a href="https://mtjfoundation.org/" target="_blank" rel="noopener noreferrer">MTJ Foundation</a>.
                                All
                                Rights Reserved.</p>
                        </div>
                        <div className="col col-lg-6 col-12">
                            <ul>
                                <li>
                                    <Link onClick={ClickHandler} to="/contact">Privace & Policy</Link>
                                </li>
                                <li>
                                    <Link onClick={ClickHandler} to="/contact">Terms</Link>
                                </li>
                                <li>
                                    <Link onClick={ClickHandler} to="/about">About us</Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer;