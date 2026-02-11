import React, { Fragment } from 'react';
import Navbar from '../../components/Navbar/Navbar'
import Hero from '../../components/hero/hero';
import About from '../../components/about/about';
import ServiceSectionS2 from '../../components/ServiceSectionS2/ServiceSectionS2';
import EventSection from '../../components/EventSection/EventSection';
import Footer from '../../components/footer/Footer';
import Scrollbar from '../../components/scrollbar/scrollbar';
import BrandArea from '../../components/brands/brands';



const HomePage = () => {
    return (
        <Fragment>
            <Navbar hclass={'wpo-header-style-4'} />
            <Hero />
            <About />
            <ServiceSectionS2 showViewAll={false} limit={3} />
            <EventSection />
            <BrandArea />
            <Footer />
            <Scrollbar /> 
        </Fragment> 
    )
};
export default HomePage;