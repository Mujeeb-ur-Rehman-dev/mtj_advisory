import React, { useState } from "react";
import { Link } from 'react-router-dom'
import Events from '../../api/events'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import EventsTab from "../EventsTabbar";
import icon1 from "../../images/event/time.svg";
import icon2 from "../../images/event/pin.svg";


const ClickHandler = () => {
    window.scrollTo(10, 0);
}

const settings = {
    dots: false,
    arrows: true,
    fade: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
};

 
const EventSection = (props) => {
    const [activeTab, setActiveTab] = useState('event');

    // Filter events based on active tab
    const getFilteredEvents = () => {
        if (activeTab === 'all') {
            return Events;
        }
        
        return Events.filter(event => event.type === activeTab);
    };

    const filteredEvents = getFilteredEvents();

    const handleTabClick = (tabName) => {
        setActiveTab(tabName);
    };

    return (
        <section className="event-section">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-lg-6 col-md-8 col-12">
                        <div className="section-title">
                            <h2>News & Events</h2>
                        </div>
                    <EventsTab activeTab={activeTab} onTabClick={handleTabClick} />
                    </div>
                </div>
                <div className="event-active">
                    <Slider {...settings}>
                        {filteredEvents.map((event, evt) => (
                            <div className="event-wrap" key={evt}>
                                <div className="image-wrap">
                                    <div className="image">
                                        <img src={event.eImg} alt="" />
                                    </div>
                                </div>
                                <div className="content-wrap">
                                    <div className="content">
                                        <div className="event-type-badge">
                                            <span className={`badge ${event.type === 'news' ? 'news-badge' : 'event-badge'}`}>
                                                {event.type === 'news' ? 'News' : 'Event'}
                                            </span>
                                        </div>
                                        <h2 className="title"><Link onClick={ClickHandler} to="/">{event.title}</Link></h2>
                                        <ul>
                                            <li><img src={icon1} alt="icon" /> {event.date} @ {event.time} </li>
                                            <li><img src={icon2} alt="icon" /> {event.location}</li>
                                        </ul>
                                        <p>{event.description}</p>
                                        {/* <Link onClick={ClickHandler} to={`/event-single/${event.slug}`} className="theme-btn">Read More</Link> */}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </Slider>
                </div>
            </div>
        </section>
    );
}

export default EventSection;