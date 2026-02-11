import React from 'react';
import { FiX } from 'react-icons/fi';

const TeamMemberPopup = ({ isOpen, onClose, teamMember }) => {
    console.log('TeamMemberPopup render:', { isOpen, teamMember });
    
    if (!isOpen || !teamMember) {
        console.log('TeamMemberPopup not showing:', { isOpen, teamMember });
        return null;
    }

    console.log('TeamMemberPopup showing for:', teamMember);

    return (
        <div className="team-popup-overlay" onClick={onClose}>
            <div className="team-popup-content" onClick={(e) => e.stopPropagation()}>
                <button className="popup-close-btn" onClick={onClose}>
                    <FiX />
                </button>
                
                <div className="popup-header">
                    <div className="team-member-image">
                        <img src={teamMember.Pimg} alt={teamMember.title} />
                    </div>
                    <div className="team-member-info">
                        <h2>{teamMember.title}</h2>
                        {teamMember.name && <h3>{teamMember.name}</h3>}
                        {teamMember.degrees && <p className="degrees">{teamMember.degrees}</p>}
                    </div>
                </div>
                
                <div className="popup-body">
                    <div className="team-member-description">
                        <p>{teamMember.message}</p>
                    </div>
                    
                    {teamMember.contact && (
                        <div className="team-member-contact">
                            <h4>Contact Information</h4>
                            <p>{teamMember.contact}</p>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default TeamMemberPopup;
