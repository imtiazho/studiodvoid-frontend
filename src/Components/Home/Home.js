import React from 'react';
import Topbanner from '../Topbanner/Topbanner';
import NavBar from '../NavBar/NavBar';
import VerticalSocial from '../VerticalSocial/VerticalSocial';
import Dept from '../Dept/Dept';
import ProjectHomePage from '../ProjectHomePage/ProjectHomePage';
import WhyUS from '../WhyUS/WhyUS';
import Testimonials from '../Testimonials/Testimonials';
import ContactForm from '../ContactForm/ContactForm';
import Footer from '../Footer/Footer';

const Home = () => {
    return (
        <div>
            <NavBar />
            <Topbanner />
            <VerticalSocial />
            <Dept />
            <ProjectHomePage />
            <WhyUS />
            <Testimonials />
            <ContactForm />
            <Footer />
        </div>
    );
};

export default Home;