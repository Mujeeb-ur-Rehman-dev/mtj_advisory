import React, {Fragment} from 'react';
import Navbar from '../../components/Navbar/Navbar';
import PageTitle from '../../components/pagetitle/PageTitle'
import Careerspage from '../../components/Careerspage/Careerspage'
import Scrollbar from '../../components/scrollbar/scrollbar'
import Footer from '../../components/footer/Footer';

const CareersPage =() => {
    return(
        <Fragment>
            <Navbar/>
            <PageTitle pageTitle={'Careers'} pagesub={'Join Our Team'}/> 
            <Careerspage/>
            <Footer ftClass={'s3'}/>
            <Scrollbar/>
        </Fragment>
    )
};
export default CareersPage;
