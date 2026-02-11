import React from "react";
import { Link } from 'react-router-dom'
import hero1 from '../../images/slider/img.jpg'
import icon from '../../images/slider/mtjf_logo.png'


const Hero = () => {

    const ClickHandler = () => {
        window.scrollTo(10, 0);
    }

    return (

        <section className="static-hero">
            <div className="container-fluid">
                <div className="content">
                    <div className="icon">
                        <img src={icon} alt="MTJ Advisory  MTJFoundation Logo" />
                    </div>

                    <h2 className="title">“Independent Sharia Advisory & Governance Partner”</h2>

                    <span className="subtitle">firm providing practical, commercially viable, and regulator aligned Sharia solutions. We bridge classical Sharia principles with modern business and regulatory realities.</span>
                    <div className="hero-btn">
                        <Link onClick={ClickHandler} to="/service" className="theme-btn">Our Services</Link>
                    </div>
                </div>
                <div className="right-img">
                    <img src={hero1} alt="" />
                </div>
            </div>
        </section>
    )
}

export default Hero;