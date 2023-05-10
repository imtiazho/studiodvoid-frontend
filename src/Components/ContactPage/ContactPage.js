import React from 'react';
import NavBar from '../NavBar/NavBar';
import ContactForm from '../ContactForm/ContactForm';
import Footer from '../Footer/Footer';

const ContactPage = () => {
    return (
        <div>
            <NavBar />
            <div className='pt-36 mb-16'>
                <ContactForm />
            </div>
            <Footer />
        </div>
    );
};

export default ContactPage;