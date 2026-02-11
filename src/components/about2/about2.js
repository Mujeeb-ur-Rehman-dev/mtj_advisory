import React from 'react'
import { Link } from 'react-router-dom'
import abImg from '../../images/about-3.jpg'
import icon from '../../images/phone-call.svg'


const About2 = (props) => {

    const ClickHandler = () => {
        window.scrollTo(10, 0);
    }

    return (
        <section className="about-section-s2">
            <div className="container">
                <div className="wrap">
                    <div className="row align-items-center">
                        <div className="col-lg-6 col-12">
                            <div className="image">
                                <img src={abImg} alt="about" />
                            </div>
                        </div>
                        <div className="col-lg-6 col-12">
                            <div className="content">
                                <div className="section-title">
                                    <h2>About Us</h2>
                                    <h3>Welcome to Isteqbal Islamic Center for Muslims</h3>
                                    <p>Lorem ipsum dolor sit amet consectetur. Eget leo hac mauris aliquam luctus ut
                                        nascetur. Nunc sit odio tempor massa dui non. Quam nisi sagittis non tincidunt.
                                        Eu dolor gravida mattis sagittis aliquet eu tellus maecenas. Nisi a mattis
                                        ultrices id arcu massa nec leo non. Eget pretium nam felis eget varius faucibus
                                        velit. Malesuada facilisis habitasse eget tellus tristique turpis scelerisque
                                        lacus. Habitant vivamus ut et augue. Non id amet ut luctus consequat egestas id
                                        nunc.</p>
                                </div>
                                <div className="about-bottom">
                                    <Link onClick={ClickHandler} to={'/about'} className="theme-btn">Discover More</Link>

                                    <div className="call">
                                        <div className="icon">
                                            <img src={icon} alt="" />
                                        </div>
                                        <div className="text">
                                            <span>Call Us:</span>
                                            <a href="tel:1112222">
                                                +(684) 555-0102
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About2;