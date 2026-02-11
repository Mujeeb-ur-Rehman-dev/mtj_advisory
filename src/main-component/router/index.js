import React from 'react';
import { BrowserRouter, Routes, Route, } from "react-router-dom";
import Homepage from '../HomePage/HomePage'
import AboutPage from '../AboutPage/AboutPage';
import ServicePageS2 from '../ServicePageS2/ServicePageS2';
import DonatePage from '../DonatePage/DonatePage';
import ContactPage from '../ContactPage/ContactPage';
import CareersPage from '../CareersPage/CareersPage';
import ErrorPage from '../ErrorPage/ErrorPage';

const AllRoute = () => {

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="home" element={<Homepage />} />
          <Route path="about" element={<AboutPage />} />
          <Route path="service" element={<ServicePageS2 />} />
          <Route path="donate" element={<DonatePage />} />
          <Route path='contact' element={<ContactPage />} />
          <Route path='careers' element={<CareersPage />} />
          <Route path='404' element={<ErrorPage />} />

        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default AllRoute;
