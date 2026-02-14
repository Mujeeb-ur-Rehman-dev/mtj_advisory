import React, { Fragment } from 'react';
import Navbar from '../../components/Navbar/Navbar';
import PageTitle from '../../components/pagetitle/PageTitle'
import About from '../../components/about/about';
import aboutBg from '../../images/about-hero.jpg'

import TeamSection from '../../components/PillarsSection/TeamSection';
import Scrollbar from '../../components/scrollbar/scrollbar'
import Footer from '../../components/footer/Footer';
import VisionAndMission from '../../components/VisionAndMission/VisionAndMission';

const AboutPage = () => {
    return (
        <Fragment>
            <Navbar />
            <PageTitle pageTitle={'About Us'} pagesub={'About'} bgImage={aboutBg} />
            <About/>
            <VisionAndMission/>
            <TeamSection/>
            <Footer/>
            <Scrollbar />
        </Fragment>
    )
};
export default AboutPage;
