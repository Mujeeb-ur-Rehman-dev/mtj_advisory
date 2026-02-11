import React from 'react'
import { Link } from 'react-router-dom'
import abImg from '../../images/about-1.jpg'
import abImg2 from '../../images/about-2.jpg'

const About = (props) => {

    const ClickHandler = () => {
        window.scrollTo(10, 0);
    }

    return (
        <section className="about-section">
            <div className="container">
                <div className="wrap">
                    <div className="left-img">
                        <div className="about-1">
                            <img src={abImg} alt=""/>
                        </div>
                        <div className="about-2">
                            <img src={abImg2} alt=""/>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-6 offset-lg-6">
                            <div className="content">
                                <div className="section-title">
                                    <h2 className='mobile_text_center'>About Us</h2>
                                    {/* <h3 className='mobile_text_center'>Sharia-Compliant Advisory for a Sustainable Future</h3> */}
                                    <h3 className='mobile_text_center'>Sharia Advisory, Governance & Compliance Solutions</h3>
                                    {/* <p >MTJ Advisory is a trusted Sharia-compliant financial and legal consulting firm, providing innovative advisory solutions across Islamic banking and finance. Backed by experts in Sharia, law, banking, and fintech, we deliver bespoke services including Sukuk structuring, establishment of Islamic banks, product development, and fintech solutions.
                                       We partner with corporations, regulators, and institutions across diverse jurisdictions to shape the future of Islamic finance, strengthen governance, and build human capital. Guided by excellence, innovation, and integrity, MTJ Advisory strives to be a catalyst for sustainable growth by bridging traditional Sharia principles with modern financial innovation.</p> */}
                                   <p >MTJ Advisory is a professional Sharia advisory and compliance firm providing end to end Sharia solutions to SMEs, corporates, financial institutions, and investment entities. Our services are designed to ensure that business activities, products, and governance structures are fully aligned with Islamic principles while remaining commercially viable and operationally efficient.
We combine deep Sharia expertise with strong understanding of modern business practices, regulatory expectations, and international standards such as AAOIFI and IFSB. Our approach is practical, structured, and growth oriented, supporting clients at every stage of their business lifecycle.
</p>     
                                </div>
                                <div className="about-bottom mobile_text_center">
                                    <Link onClick={ClickHandler} to={'/about'} className="theme-btn">Discover More</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About;