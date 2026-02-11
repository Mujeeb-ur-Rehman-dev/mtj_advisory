import React, { useState } from "react";
import { Link } from 'react-router-dom'
import Services from "../../api/Services";
import ServicesTab from "../ServicesTabbar/ServicesTab";
import ServiceDetailsPopup from "../ServiceDetailsPopup";
import Governance from '../../components/Governance/Governance ';


const ClickHandler = () => {
    // window.scrollTo(10, 0);

}

const ServiceSectionS2 = (props) => {
    const { limit, showViewAll = true, showGovernance = false } = props;
    const [activeTab, setActiveTab] = useState('capital-markets');
    const [selectedService, setSelectedService] = useState(null);
    const [isPopupOpen, setIsPopupOpen] = useState(false);

    // Filter services based on active tab
    const getFilteredServices = () => {
        const filteredServices = Services.filter(service => 
            service.categories && service.categories.includes(activeTab)
        );
        
        return limit ? filteredServices.slice(0, limit) : filteredServices;
    };

    const servicesToShow = getFilteredServices();

    const handleTabClick = (tabName) => {
        setActiveTab(tabName);
    };

    const handleServiceClick = (service) => {
        setSelectedService(service);
        setIsPopupOpen(true);
    };

    const closePopup = () => {
        setIsPopupOpen(false);
        setSelectedService(null);
    };

    return (
        <section className="service-section-s2 section-padding">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-lg-7 col-12">
                        <div className="section-title">
                            <h2>Our Services</h2>
                        </div>
                    </div>
                    <div className="tab_container mb-30">
                    <ServicesTab activeTab={activeTab} onTabClick={handleTabClick} />
                    </div>
                </div>
                <div className="service-wrap">
                    <div className="row">
                        {servicesToShow.map((service, sitem) => (
                            <div className="col-xl-4 col-lg-6 col-md-6 col-12" key={sitem}>
                                <div className="service-card" onClick={() => handleServiceClick(service)}>
                                    <div className="top-number">
                                        <span>{service.Id}</span>
                                    </div>
                                    <div className="icon">
                                        <img src={service.icon} alt="service" />
                                    </div>
                                    <div className="text">
                                        <h2>{service.title}</h2>
                                        
                                        <p>{service.description.slice(0, 100)}...</p>
                                        <span className="read-more">Read More...</span>
                                    </div>
                                    <div className="image">
                                        <img src={service.sImg} alt="service" />
                                        <h2 className="img-title">{service.title}</h2>
                                    </div>
                                </div>
                            </div>
                        )) }

                    </div>
                </div>
                {!showViewAll && (
                    <div className="hero-btn text-center mt-5">
                        <Link onClick={ClickHandler} to="/service" className="theme-btn">View All Services</Link>
                    </div>
                )}
           
            </div>
              
            {/* Service Details Popup */}
            <ServiceDetailsPopup 
                isOpen={isPopupOpen}
                onClose={closePopup}
                service={selectedService}
            />
            
             {showGovernance && <Governance />}
        </section>
    );
}

export default ServiceSectionS2;
