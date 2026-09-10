import React from 'react';
import { Helmet } from 'react-helmet-async';
import NavBar from '../NavBar/NavBar';
import ContactForm from '../ContactForm/ContactForm';
import Footer from '../Footer/Footer';

const ContactPage = () => {
    return (
        <div>
            <Helmet>
                <title>Contact | StudioDvoid</title>
            </Helmet>
            <NavBar />
            <div className='md:pt-36 pt-28 mb-16'>
                <ContactForm />
            </div>
            <Footer />
        </div>
    );
};

export default ContactPage;