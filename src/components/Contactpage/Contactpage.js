import React from 'react';
import ContactForm from '../ContactFrom/ContactForm'


const Contactpage = () => {

    return(
        <section className="wpo-contact-pg-section section-padding">
            <div className="container">
                <div className="row">
                    <div className="col col-lg-10 offset-lg-1">
                        <h2 style={{ color: '#DB9E30' }}>Let’s Talk</h2>
                        <p>Whether you are establishing Sharia governance, structuring products, or strengthening compliance, MTJ Advisory is ready to support you.</p>
                        <div className="office-info">
                            <div className="row">
                                <div className="col col-xl-4 col-lg-6 col-md-6 col-12">
                                    <a href='https://maps.app.goo.gl/Q531o71YHuyePMYz9' target='_blank'>
                                        <div className="office-info-item">
                                            <div className="office-info-icon">
                                                <div className="icon">
                                                    <i className="fi flaticon-placeholder"></i>
                                                </div>
                                            </div>
                                            <div className="office-info-text">
                                                <h2>Address</h2>
                                                <p>Makhdoom Pur Road, Tulamba, District Khanewal.</p>
                                            </div>
                                        </div>
                                    </a>
                                </div> 
                                <div className="col col-xl-4 col-lg-6 col-md-6 col-12">
                                    <a href="mailto:info@mtjadvisory.org" target='_blank'>
                                        <div className="office-info-item">
                                            <div className="office-info-icon">
                                                <div className="icon">
                                                    <i className="fi flaticon-email"></i>
                                                </div>
                                            </div>
                                            <div className="office-info-text">
                                                <h2>Email Us</h2>
                                                <p>info@mtjadvisory.com</p>
                                                {/* <p>info@mtjfoundation.org</p> */}
                                            </div>
                                        </div>
                                    </a>
                                </div> 
                                <div className="col col-xl-4 col-lg-6 col-md-6 col-12">
                                    <a href="tel:0303-2440000" target='_blank'>
                                        <div className="office-info-item">
                                            <div className="office-info-icon">
                                                <div className="icon">
                                                <i className="fi flaticon-phone-call"></i>
                                            </div>
                                        </div>
                                        <div className="office-info-text">
                                            <h2>Call Now</h2>
                        
                                            <p>061 111 786 853</p>
                                            <p>0303-2440000</p>
                                        </div>
                                        </div>
                                    </a>
                                </div> 
                            </div>
                        </div>
                        <div className="wpo-contact-title">
                            <h2 style={{ color: '#DB9E30' }}>Strengthen Your Sharia Governance</h2>
                            <p>Partner with MTJ Advisory for credible, practical, and scalable Sharia solutions.</p>
                        </div>
                        <div className="wpo-contact-form-area">
                            <ContactForm/>
                        </div>
                    </div>                
                </div>
            </div> 
            <section className="wpo-contact-map-section">
                <div className="wpo-contact-map">
                    <iframe title='comtact-map' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3436.946785641177!2d72.22527757621434!3d30.522543795759272!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39234f02c38000eb%3A0xdfb1161e353314b4!2sMolana%20Tariq%20Jamil%20Foundation!5e0!3m2!1sen!2s!4v1756098467607!5m2!1sen!2s"></iframe>
                </div>
            </section>
        </section>
     )
        
}

export default Contactpage;
