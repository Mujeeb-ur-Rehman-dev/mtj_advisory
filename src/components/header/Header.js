import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import MobileMenu from '../MobileMenu/MobileMenu'
import Logo from '../../images/Advisory logo.png'
import { connect } from "react-redux";
import { removeFromCart } from "../../store/actions/action";
import icon from '../../images/phone-call.svg'

const Header = (props) => {

    const location = useLocation();

    const SubmitHandler = (e) => {
        e.preventDefault()
    }

    const ClickHandler = () => {
        window.scrollTo(10, 0);
    }

    // Function to check if a link is active
    const isActive = (path) => {
        if (path === '/') {
            return location.pathname === '/' || location.pathname === '/home';
        }
        return location.pathname === path;
    };

    return (
        <header id="header" className={props.hclass}>
            <div className="wpo-site-header">
                <nav className="navigation navbar navbar-expand-lg navbar-light">
                    <div className="container-fluid">
                        <div className="row align-items-center">
                            <div className="col-lg-3 col-md-3 col-3 d-lg-none dl-block">
                                <MobileMenu />
                            </div>
                            <div className="col-lg-2 col-md-6 col-6">
                                <div className="navbar-header">
                                    <Link onClick={ClickHandler} className="navbar-brand" to="/home"><img src={Logo}
                                        alt="logo" /></Link>
                                </div>
                            </div>
                            <div className="col-lg-6 col-md-1 col-1">
                                <div id="navbar" className="collapse navbar-collapse navigation-holder">
                                    <button className="menu-close"><i className="ti-close"></i></button>
                                    <ul className="nav navbar-nav mb-2 mb-lg-0">
                                        <li className="menu-item-has-children">
                                            <Link onClick={ClickHandler} className={isActive('/') ? 'active' : ''} to="/">Home</Link>
                                        </li>
                                        <li className="menu-item-has-children">
                                            <Link onClick={ClickHandler} className={isActive('/about') ? 'active' : ''} to="/about">About</Link>
                                        </li>
                                        <li className="menu-item-has-children">
                                            <Link onClick={ClickHandler} className={isActive('/service') ? 'active' : ''} to="/service">Service</Link>
                                        </li>
                                        <li className="menu-item-has-children">
                                            <Link onClick={ClickHandler} className={isActive('/careers') ? 'active' : ''} to="/careers">Careers</Link>
                                        </li>

                                        {/* Add pages options from mobile menu components */}
                                        {/* <li className="menu-item-has-children">
                                            <Link  to="#">Pages</Link>
                                            <ul className="sub-menu">
                                                <li><Link onClick={ClickHandler} className={isActive('/home') ? 'active' : ''} to="/home">Home</Link></li>
                                                <li><Link onClick={ClickHandler} className={isActive('/about') ? 'active' : ''} to="/about">About</Link></li>
                                                <li><Link onClick={ClickHandler} className={isActive('/service') ? 'active' : ''} to="/service">Service</Link></li>
                                                <li><Link onClick={ClickHandler} className={isActive('/contact') ? 'active' : ''} to="/contact">Contact</Link></li>
                                            </ul>
                                        </li> */}
                                        <li><Link onClick={ClickHandler} className={isActive('/contact') ? 'active' : ''} to="/contact">Contact</Link></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-2 col-2">
                                <div className="header-call-section">
                                    <div className="call">
                                        <div className="icon">
                                            <img src={icon} alt=""/>
                                        </div>
                                        <div className="text">
                                            <a href="tel:0303-2440000">
                                                0303-2440000
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </nav>
            </div>
        </header>
    )
}
const mapStateToProps = (state) => {
    return {
        carts: state.cartList.cart,
    };
};


export default connect(mapStateToProps, { removeFromCart })(Header);