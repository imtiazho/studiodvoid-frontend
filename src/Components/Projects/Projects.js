import React from 'react';
import { Helmet } from 'react-helmet-async';
import NavBar from '../NavBar/NavBar';
import ProjectsShowcase from '../ProjectsShowcase/ProjectsShowcase';
import SubFooter from '../SubFooter/SubFooter';

const Projects = () => {
    return (
        <div className=''>
            <Helmet>
                <title>Projects | StudioDvoid</title>
            </Helmet>
            <NavBar />
            <ProjectsShowcase />
            <SubFooter />
        </div>
    );
};

export default Projects;