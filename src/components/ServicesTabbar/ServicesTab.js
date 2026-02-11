import React from 'react'
import { Link } from 'react-router-dom'
import { 
    FiMenu, 
    FiHome, 
    FiShield, 
    FiBriefcase, 
    FiTrendingUp, 
    FiHeart, 
    FiCreditCard, 
    FiBookOpen, 
    FiSmartphone 
} from 'react-icons/fi'

const ServicesTab = (props) => {
    const { activeTab, onTabClick } = props;

    const ClickHandler = () => {
        window.scrollTo(10, 0);
    }

    return (
        <div className="services-tabbar">
            {/* <div className="tabbar-header">
                <h3>Services Categories</h3>
                </div> */}
            <div className="tabbar-tabs">
                 <button 
                    className={`tab-item ${activeTab === 'outsourcing' ? 'active' : ''}`}
                    onClick={() => onTabClick('outsourcing')}
                >
                    <i><FiCreditCard /></i>
                    <span>Outsourcing of Sharia Compliance Department</span>
                </button>

                   <button 
                    className={`tab-item ${activeTab === 'certification' ? 'active' : ''}`}
                    onClick={() => onTabClick('certification')}
                >
                    <i><FiHeart /></i>
                    <span>Sharia Review and Sharia Certification (Fatwa) Services</span>
                </button>


                   <button 
                    className={`tab-item ${activeTab === 'framework' ? 'active' : ''}`}
                    onClick={() => onTabClick('framework')}
                >
                    <i><FiBookOpen /></i>
                    <span>Sharia Governance Framework</span>
                </button>

                <button 
                    className={`tab-item ${activeTab === 'smes' ? 'active' : ''}`}
                    onClick={() => onTabClick('smes')}
                >
                    <i><FiTrendingUp /></i>
                    <span>SMEs Sharia Advisory</span>
                </button>
                
                <button 
                    className={`tab-item ${activeTab === 'appointment' ? 'active' : ''}`}
                    onClick={() => onTabClick('appointment')}
                >
                    <i><FiShield /></i>
                    <span>Appointment of Sharia Board</span>
                </button>
                
           
                
             
                
                <button 
                    className={`tab-item ${activeTab === 'product' ? 'active' : ''}`}
                    onClick={() => onTabClick('product')}
                >
                    <i><FiBriefcase /></i>
                    <span>Sharia Compliance Product Structuring</span>
                </button>

             

                <button 
                    className={`tab-item ${activeTab === 'auditing' ? 'active' : ''}`}
                    onClick={() => onTabClick('auditing')}
                >
                    <i><FiSmartphone /></i>
                    {/* <span>Fintech &nbsp; &nbsp; &nbsp;</span> */}
                    <span>Sharia Auditing Services</span>
                </button>

                <button 
                    className={`tab-item ${activeTab === 'zakat' ? 'active' : ''}`}
                    onClick={() => onTabClick('zakat')}
                >
                    <i><FiHome /></i>
                    <span>Zakat Calculation Services</span>
                </button>
                 <button 
                    className={`tab-item ${activeTab === 'screening' ? 'active' : ''}`}
                    onClick={() => onTabClick('screening')}
                >
                    <i><FiHome /></i>
                    <span>Sharia Screening Services</span>
                </button>
                 <button 
                    className={`tab-item ${activeTab === 'training' ? 'active' : ''}`}
                    onClick={() => onTabClick('training')}
                >
                    <i><FiHome /></i>
                    <span>Sharia Training</span>
                </button>
            </div>
        </div>
    )
}

export default ServicesTab;
