import React, { useState } from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import pImg1 from '../../images/pillars/1.jpg'
import pImg2 from '../../images/pillars/2.jpg'
import pImg3 from '../../images/pillars/3.jpg'
import pImg4 from '../../images/pillars/4.jpg'
import TeamMemberPopup from '../TeamMemberPopup';

const Pillars = [
    {
        Pimg: pImg1,
        title: 'CEO',
        name: 'Ehtasham Ullah Qureshi',
        degrees: 'MBA, CFA, Islamic Finance Certification',
        message: 'Leading our organization with over 15 years of experience in Islamic finance and corporate governance. Specialized in Sharia-compliant financial products and strategic planning for Islamic financial institutions.',
        contact: 'ahmed.hassan@mtjadvisory.com'
    },
    {
        Pimg: pImg2,
        title: 'CFO',
        name: 'Rashid Iqbal',
        degrees: 'MSc Finance, CPA, Islamic Banking Diploma',
        message: 'Expert in financial management and compliance with over 12 years in Islamic banking. Specializes in Sukuk structuring, risk management, and financial reporting for Sharia-compliant institutions.',
        contact: 'fatima.alzahra@mtjadvisory.com'
    },
    {
        Pimg: pImg3,
        title: 'IT Manager',
        name: 'Irfan Waheed',
        degrees: 'BSc Computer Science, MSc IT Management',
        message: 'Leading our technology initiatives with expertise in fintech solutions and digital transformation. Specializes in developing Sharia-compliant digital platforms and cybersecurity for Islamic financial institutions.',
        contact: 'omar.khalil@mtjadvisory.com'
    },
    {
        Pimg: pImg4,
        title: 'HR Manager',
        name: 'Farrukh Khan',
        degrees: 'MBA Marketing, Digital Marketing Certification',
        message: 'Driving our market presence and client relationships with innovative marketing strategies. Expert in Islamic finance communication and building trust with stakeholders in the Islamic financial community.',
        contact: 'aisha.rahman@mtjadvisory.com'
    },
    {
        Pimg: pImg2,
        title: 'Dev Lead',
        name: 'Asad Ali',
        degrees: 'MSc Investment Management, CFA',
        message: 'Managing our investment strategies and portfolio optimization with deep understanding of Sharia-compliant investment principles. Specializes in ethical investment screening and Islamic asset management.',
        contact: 'yusuf.ibrahim@mtjadvisory.com'
    },
    {
        Pimg: pImg3,
        title: 'Program Manager',
        name: 'M. Ikram',
        degrees: 'MSc Risk Management, FRM, Islamic Finance',
        message: 'Leading our risk management framework with expertise in identifying and mitigating risks in Islamic financial products. Specializes in Sharia-compliant risk assessment and compliance monitoring.',
        contact: 'zara.ahmed@mtjadvisory.com'
    },
]

const settings = {
    dots: false,
    arrows: false,
    speed: 1000,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    responsive: [
        {
            breakpoint: 1400,
            settings: {
                slidesToShow: 5,
                slidesToScroll: 1,
                infinite: true,
            }
        },
        {
            breakpoint: 1200,
            settings: {
                slidesToShow: 4,
                slidesToScroll: 1,
                centerPadding: '0',
                infinite: true,
            }
        },
        {
            breakpoint: 991,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
            }
        },
        {
            breakpoint: 767,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                dots: true,
            }
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                dots: true,
            }
        }
    ]
};

const TeamSection = (props) => {
    const [selectedTeamMember, setSelectedTeamMember] = useState(null);
    const [isPopupOpen, setIsPopupOpen] = useState(false);

    const handleTeamMemberClick = (teamMember) => {
        setSelectedTeamMember(teamMember);
        setIsPopupOpen(true);
    };

    const closePopup = () => {
        setIsPopupOpen(false);
        setSelectedTeamMember(null);
    };

    return (
        <section className={`pillars-section section-padding ${props.plClass}`}>
            <div className="container-fluid">
                <div className="row justify-content-center">
                    <div className="col-lg-6 col-md-8 col-12"> 
                        <div className="section-title">
                            <h2>Our Team</h2>
                            <h3>Meet Our Expert Team</h3>
                        </div>
                    </div>
                </div>
                <div className="pillars-wrap">
                    <div className="pillars-slider">
                        <Slider {...settings}>
                            {Pillars.map((teamMember, i) => (
                                <div className="pillars-card" key={i}>
                                    <div className="team-card-content">
                                        {/* Default State: Show Text */}
                                        <div className="team-text-content">
                                            <h2 className="team-title">{teamMember.title}</h2>
                                            <h3 className="team-name">{teamMember.name}</h3>
                                            <p className="team-degrees">{teamMember.degrees}</p>
                                            <p className="team-message">{teamMember.message}</p>
                                        </div>
                                        
                                        {/* Hover State: Show Image */}
                                        <div className="team-image-overlay" onClick={() => handleTeamMemberClick(teamMember)}>
                                            <img src={teamMember.Pimg} alt={teamMember.name} />
                                            <div className="popup-icon">
                                                <i className="ti-plus"></i>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </Slider>
                    </div>
                </div>
            </div>
            
            {/* Team Member Popup */}
            <TeamMemberPopup
                isOpen={isPopupOpen}
                onClose={closePopup}
                teamMember={selectedTeamMember}
            />
        </section>
    )
}

export default TeamSection;