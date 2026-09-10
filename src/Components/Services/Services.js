import React from 'react';
import { Helmet } from 'react-helmet-async';
import Dept from '../Dept/Dept';
import NavBar from '../NavBar/NavBar';
import SubFooter from '../SubFooter/SubFooter';

const Services = () => {
    return (
        <div>
            <Helmet>
                <title>Services | StudioDvoid</title>
            </Helmet>
            <NavBar />
            <div className="py-[10rem]">
                <Dept />
            </div>
            <SubFooter />
        </div>
    );
};

export default Services;