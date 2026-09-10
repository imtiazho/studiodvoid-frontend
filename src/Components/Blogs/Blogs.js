import React from 'react';
import { Helmet } from 'react-helmet-async';
import NavBar from '../NavBar/NavBar';
import PageBanner from '../PageBanner/PageBanner';
import blogBanner from '../../Media/section-banner.jpg';
import BlogsContainer from '../BlogsContainer/BlogsContainer';
import Footer from '../Footer/Footer';

const Blogs = () => {
    return (
        <div>
            <Helmet>
                <title>Blogs | StudioDvoid</title>
            </Helmet>
            <NavBar />
            <PageBanner banner={blogBanner} moto={"Important Blogs"} subTitle={"Only blogs here"} />
            <BlogsContainer />
            <Footer />
        </div>
    );
};

export default Blogs;