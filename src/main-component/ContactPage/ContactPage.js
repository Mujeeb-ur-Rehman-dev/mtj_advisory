import React, {Fragment} from 'react';
import Navbar from '../../components/Navbar/Navbar';
import PageTitle from '../../components/pagetitle/PageTitle'
import Contactpage from '../../components/Contactpage/Contactpage'
import contactBg from '../../images/contact-hero.jpg'

import Scrollbar from '../../components/scrollbar/scrollbar'
import Footer from '../../components/footer/Footer';

const ContactPage =() => {
    return(
        <Fragment>
            <Navbar/>
            <PageTitle pageTitle={'Contact Us'} pagesub={'Contact'} bgImage={contactBg}/> 
            <Contactpage/>
            <Footer ftClass={'s3'}/>
            <Scrollbar/>
        </Fragment>
    )
};
export default ContactPage;

