import React from "react";
import { FaNewspaper } from "react-icons/fa";
import { SlCalender } from "react-icons/sl";

const EventsTab = ({ activeTab, onTabClick }) => {
  return (
    <div className="events-tabbar" role="tablist" aria-label="News and Events">
      <div className="tabbar-tabs">
        <span
          type="button"
          className={`tab-item ${activeTab === "event" ? "active" : ""}`}
          onClick={() => onTabClick("event")}
          role="tab"
          aria-selected={activeTab === "event"}
        >
          <span className="icon" aria-hidden="true"><SlCalender /></span>
          <span className="label">Events</span>
        </span>
        <span   
          type="button"
          className={`tab-item ${activeTab === "news" ? "active" : ""}`}
          onClick={() => onTabClick("news")}
          role="tab"
          aria-selected={activeTab === "news"}
        >
          <span className="icon" aria-hidden="true"><FaNewspaper /></span>
          <span className="label">News</span>
        </span>
      </div>
    </div>
  );
};

export default EventsTab;
