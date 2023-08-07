import React from 'react';
import projectImage1 from '../../Media/project-1.jpg';
import projectImage2 from '../../Media/post-01.jpg';
import projectImage3 from '../../Media/post-02.jpg';
import projectImage4 from '../../Media/post-03.jpg';
import projectImage5 from '../../Media/post-04.jpg';
import { Link } from 'react-router-dom';
import { BsFacebook, BsPinterest, BsYoutube } from 'react-icons/bs';
import { AiFillLinkedin, AiOutlineInstagram } from 'react-icons/ai';
import SubFooter from '../SubFooter/SubFooter';
import NavBar from '../NavBar/NavBar';

const ProjectDetailsMain = () => {
    return (
        <div>
            <NavBar />

            <div className='w-[75%] mx-auto pt-[10rem] text-left flex flex-col gap-10'>
                <h1 className='text-[55px] font-[800] text-secondary'>Creative Studio 8</h1>
                <div className='grid grid-cols-5 gap-8 items-center'>
                    <div className='col-span-2 bg-[#131313] p-12 flex flex-col gap-5 text-left text-accent shadow-xl'>
                        <p className='text-xl font-[600]'>Project Details:</p>
                        <div className='grid grid-cols-2 gap-24'>
                            <div>
                                <p className='text-lg font-[500] mb-[2px]'>Project</p>
                                <p className='text-[14px] text-accent'>Outdoor Paint</p>
                            </div>
                            <div>
                                <p className='text-lg font-[500] mb-[2px]'>Clients</p>
                                <p className='text-[14px] text-accent'>Jimmy Divison</p>
                            </div>
                        </div>
                        <div className='grid grid-cols-2 gap-24'>
                            <div>
                                <p className='text-lg font-[500] mb-[2px]'>Location</p>
                                <p className='text-[14px] text-accent'>Miranda, USA</p>
                            </div>
                            <div>
                                <p className='text-lg font-[500] mb-[2px]'>Project Year</p>
                                <p className='text-[14px] text-accent'>2021</p>
                            </div>
                        </div>
                    </div>
                    <div className='col-span-3 text-[14px] font-[300] leading-loose jose-font text-accent'>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididuntut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                        <p className='mt-4'>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium totam remaperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit</p>
                        <div className='flex gap-4 items-center mt-4 text-[16px]'>
                            <Link><BsFacebook /></Link>
                            <Link><AiOutlineInstagram /></Link>
                            <Link><AiFillLinkedin /></Link>
                            <Link><BsPinterest /></Link>
                            <Link><BsYoutube /></Link>
                        </div>
                    </div>
                </div>

                <div className='flex flex-col gap-10 mb-24'>
                    <img className='h-[580px] w-full object-cover]' src={projectImage1} alt="" />
                    <img className='h-[580px] w-full object-cover]' src={projectImage2} alt="" />
                    <img className='h-[580px] w-full object-cover]' src={projectImage3} alt="" />
                    <img className='h-[580px] w-full object-cover]' src={projectImage4} alt="" />
                    <img className='h-[580px] w-full object-cover]' src={projectImage5} alt="" />
                </div>
            </div>
            <SubFooter />
        </div>
    );
};

export default ProjectDetailsMain;