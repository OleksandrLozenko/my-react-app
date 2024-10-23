import React, { Component } from 'react';
import CardBox from '../Components/DescriptionOfBenefits';
import BannerBox from '../Components/BannerBox';
import Footer from '../Components/Footer';
import AboutTheCompany from '../Components/AboutTheCompany';
import Achievements from '../Components/Achievements';
import Services from '../Components/Services';
import Gallery from '../Components/Gallery';
import Articles from '../Components/UsefulArticles';
import OrderForm from '../Components/OrderForm';
import Contacts from '../Components/Contacts';

const SectionDivider = () => (
    <div style={{
        height: '2px',
        backgroundColor: '#6a11cb',
        margin: '40px 0',
        borderRadius: '5px',
        width: '90%',
        marginLeft: 'auto',
        marginRight: 'auto'
    }} />
);

export default class Home extends Component {
    render() {
        return (
            <>
                <BannerBox />
                <div id='about'><AboutTheCompany /></div>
                <SectionDivider />
                <div id='benefits'><CardBox /></div>
                <SectionDivider />
                <div id='achievements'><Achievements /></div>
                <SectionDivider />
                <div id='services'><Services /></div>
                <SectionDivider />
                <div id='gallery'><Gallery /></div>
                <SectionDivider />
                <div id='articles'><Articles /></div>
                <SectionDivider />
                <div id='order'><OrderForm /></div>
                <SectionDivider />
                <div id='contacts'><Contacts /></div>
                <Footer />
            </>
        );
    }
}
