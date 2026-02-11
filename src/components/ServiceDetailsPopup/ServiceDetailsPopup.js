import React from 'react';
import { FiX } from 'react-icons/fi';

const ServiceDetailsPopup = ({ isOpen, onClose, service }) => {
    if (!isOpen || !service) return null;

    return (
        <div className="service-popup-overlay" onClick={onClose}>
            <div className="service-popup-content" onClick={(e) => e.stopPropagation()}>
                <button className="popup-close-btn" onClick={onClose}>
                    <FiX />
                </button>
                
                <div className="popup-header">
                    <div className="service-icon">
                        <img src={service.icon} alt={service.title} />
                    </div>
                    <h2>{service.title}</h2>
                </div>
                
                <div className="popup-body">
                    <div className="service-image">
                        <img src={service.sImg} alt={service.title} />
                    </div>
                    
                    <div className="service-description">
                        <p>{service.description}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ServiceDetailsPopup;
