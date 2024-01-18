import React from 'react'
import "./style.scss"
import {  Helmet } from 'react-helmet-async';
import Welcome from '../../Component/Welcome';
import OurMenu from '../../Component/OurMenu';
import ContactUs from '../../Component/ContactUs';


function Home() {
    return (
        <div>
            <Helmet>
                <title>Home Page</title>
            </Helmet>
            <Welcome></Welcome>
            <OurMenu></OurMenu>
            <ContactUs></ContactUs>
        </div>
    )
}

export default Home