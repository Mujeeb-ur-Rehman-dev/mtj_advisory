import React from 'react'
import CountUp from 'react-countup';
import { Link } from 'react-router-dom'

const FunFact = (props) => {

    const ClickHandler = () => {
        window.scrollTo(10, 0);
    }
    return (
        <section className={`funfact-section section-padding ${props.fnClass}`}>
            <div className="container">
                <div className="row">
                    <div className="col-lg-6 col-md-10 col-12">
                        <div className="funfact-content">
                            <div className="top-content">
                                <h2 className="title">Support us,</h2>
                                <h3 className="sudtitle">we need your help.</h3>
                                <p className="text">May Allah bless you! Thank you. Those who (in charity) spend of
                                    their goods by night and by day, in secret and in public, have their reward with
                                    their Lord</p>
                            </div>
                            <div className="funfact">
                                <div className="item">
                                    <h2><span><CountUp end={65} enableScrollSpy /></span>+</h2>
                                    <h4>Mosque</h4>
                                </div>
                                <div className="item">
                                    <h2><span><CountUp end={20} enableScrollSpy /></span>+</h2>
                                    <h4>Madrashas</h4>
                                </div>
                                <div className="item">
                                    <h2><span><CountUp end={500} enableScrollSpy /></span>+</h2>
                                    <h4>Students</h4>
                                </div>
                                <div className="item">
                                    <h2>
                                        <span><CountUp end={80} enableScrollSpy /></span>+
                                    </h2>
                                    <h4>Emam</h4>
                                </div>
                            </div>
                            <Link onClick={ClickHandler} to="/donate" className="theme-btn">Donate Now</Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default FunFact;