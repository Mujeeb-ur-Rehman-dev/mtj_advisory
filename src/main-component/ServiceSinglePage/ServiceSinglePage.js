import React, { Fragment } from 'react';
import Navbar from '../../components/Navbar/Navbar'
import PageTitle from '../../components/pagetitle/PageTitle'
import Scrollbar from '../../components/scrollbar/scrollbar'
import { useParams } from 'react-router-dom'
import Services from '../../api/Services';
import ServiceSidebar from './sidebar'
import Contact from './contact';
import { Link } from 'react-router-dom'
import simg1 from '../../images/service-single/2.jpg'
import simg2 from '../../images/service-single/3.jpg'
import Footer from '../../components/footer/Footer';

const ServiceSinglePage = (props) => {
    const { slug } = useParams()

    const serviceDetails = Services.find(item => item.slug === slug)

    const ClickHandler = () => {
        window.scrollTo(10, 0);
    }

    return (
        <Fragment>
            <Navbar/>
            <PageTitle pageTitle={serviceDetails.title} pagesub={'Service'} />
            <section className="wpo-service-single-section section-padding">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8 col-md-12">
                            <div className="wpo-service-single-wrap">
                                <div className="wpo-service-single-content">
                                    <img src={serviceDetails.sSImg} alt="eimg" />
                                    <div className="wpo-service-single-content-des">
                                        <h2>The journey into Islam begins with the declaration of faith, the Shahada.</h2>
                                        <p>I must explain to you how all this mistaken idea of denouncing pleasure
                                            and
                                            praising pain was born and I will give you a complete account of the
                                            system, and
                                            expound the actual teachings of the great explorer of the truth, the
                                            master-builder of human happiness. No one rejects, dislikes, or avoids
                                            pleasure
                                            itself, because it is pleasure, but because those who do not know how to
                                            pursue
                                            pleasure rationally encounter consequences that are extremely painful.
                                        </p>
                                        <p>Nor again is there anyone who loves or pursues or desires to obtain pain
                                            of
                                            itself, because it is pain, but because occasionally circumstances occur
                                            in
                                            which toil and pain can procure him some great pleasure. To take a
                                            trivial
                                            example, which of us ever undertakes laborious physical exercise.</p>
                                        <div className="wpo-service-single-sub-img">
                                            <ul>
                                                <li><img src={simg1} alt="eimg" /></li>
                                                <li><img src={simg2} alt="eimg" /></li>
                                            </ul>

                                        </div>
                                    </div>
                                </div>
                                <div className="wpo-solutions-section">
                                    <h2>Our Solutions</h2>
                                    <div className="row">
                                        {Services.slice(0, 3).map((service, srv) => (
                                            <div className="col-lg-4 col-md-6 col-12" key={srv}>
                                                <div className="wpo-solutions-item">
                                                    <div className="wpo-solutions-icon">
                                                        <div className="icon">
                                                            <img src={service.icon} alt="eimg" />
                                                        </div>
                                                    </div>
                                                    <div className="wpo-solutions-text">
                                                        <h2><Link onClick={ClickHandler} to={`/service-single/${service.slug}`}>Special Child Care</Link></h2>
                                                        <p>The lower-numbered purposes are better understood and
                                                            practiced </p>
                                                    </div>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                                <div className="wpo-service-single-item">
                                    <div className="wpo-service-contact-area">
                                        <div className="wpo-contact-title">
                                            <h2>Have project in mind? Let's discuss</h2>
                                            <p>Get in touch with us to see how we can help you with your project</p>
                                        </div>
                                        <div className="wpo-contact-form-area">
                                            <Contact />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <ServiceSidebar />
                    </div>
                </div>
            </section>
            <Footer ftClass={'s2'}/>
            <Scrollbar />
        </Fragment>
    )
};
export default ServiceSinglePage;
