import React from 'react';
import projectS1 from '../../Media/project-1s.jpg';
import projectS2 from '../../Media/project-2s.jpg';
import projectS3 from '../../Media/project-3s.jpg';
import { BsArrowRight } from 'react-icons/bs';
import { Link } from 'react-router-dom';

const ProjectsShowcase = () => {
    return (
        <div className='py-48 w-[95%] mx-auto flex flex-col gap-16'>
            <div className='grid grid-cols-2 gap-16 items-center'>
                <div className='order-1'>
                    <img src={projectS1} alt="" />
                </div>
                <div className='items-start text-left flex flex-col gap-4 text-[#ddd] order-2'>
                    <p className='uppercase text-[12px] tracking-[6px]'>ARCHITECTURE</p>
                    <div className='relative'>
                        <span className='before:content-[""] before:w-[15px] before:h-[15px] before:border before:border-2 before:border-[#fff] before:block before:rounded-full before:right-[100%] before:absolute before:translate-y-[-40%] absolute w-[110px] h-[2px] bg-white top-[50%] translate-x-[-115%]'></span>
                        <p className='text-6xl font-[600]'>Space Speaker Studio</p>
                    </div>
                    <p className='text-[12px] w-[90%] my-6 leading-loose'>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque still laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi arch sat itecto beatae vitae dicta sunt explicabo.</p>
                    <Link to='/projectsD' className='flex items-center gap-2 btn border-primary border-2 bg-transparent text-primary font-normal rounded-none hover:bg-primary hover:border-transparent hover:text-black'><span>See Project</span> <BsArrowRight /></Link>
                </div>
            </div>
            <div className='grid grid-cols-2 gap-16 items-center'>
                <div className='order-2'>
                    <img src={projectS2} alt="" />
                </div>
                <div className='items-start text-left flex flex-col gap-4 text-[#ddd] order-1'>
                    <p className='uppercase text-[12px] tracking-[6px]'>ARCHITECTURE</p>
                    <div className='relative'>
                        {/* <span className='before:content-[""] before:w-[15px] before:h-[14px] before:border before:border-2 before:border-[#fff] before:block before:rounded-full before:translate-x-[-40%] before:translate-y-[-40%] absolute w-[110px] h-[2px] bg-white top-[50%] translate-x-[-115%]'></span> */}
                        <span className='before:content-[""] before:w-[15px] before:h-[15px] before:border before:border-2 before:border-[#fff] before:block before:absolute before:rounded-full before:translate-y-[-40%] before:left-[100%] absolute w-[110px] h-[2px] bg-white top-[54%] left-[103%]'></span>
                        <p className='text-6xl font-[600]'>Space Speaker Studio</p>
                    </div>
                    <p className='text-[12px] w-[90%] my-6 leading-loose'>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque still laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi arch sat itecto beatae vitae dicta sunt explicabo.</p>
                    <button className='flex items-center gap-2 btn border-primary border-2 bg-transparent text-primary font-normal rounded-none hover:bg-primary hover:border-transparent hover:text-black'><span>See Project</span> <BsArrowRight /></button>
                </div>
            </div>
            <div className='grid grid-cols-2 gap-16 items-center'>
                <div className='order-1'>
                    <img src={projectS3} alt="" />
                </div>
                <div className='items-start text-left flex flex-col gap-4 text-[#ddd] order-2'>
                    <p className='uppercase text-[12px] tracking-[6px]'>ARCHITECTURE</p>
                    <div className='relative'>
                        <span className='before:content-[""] before:w-[15px] before:h-[15px] before:border before:border-2 before:border-[#fff] before:block before:rounded-full before:right-[100%] before:absolute before:translate-y-[-40%] absolute w-[110px] h-[2px] bg-white top-[50%] translate-x-[-115%]'></span>
                        <p className='text-6xl font-[600]'>Space Speaker Studio</p>
                    </div>
                    <p className='text-[12px] w-[90%] my-6 leading-loose'>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque still laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi arch sat itecto beatae vitae dicta sunt explicabo.</p>
                    <button className='flex items-center gap-2 btn border-primary border-2 bg-transparent text-primary font-normal rounded-none hover:bg-primary hover:border-transparent hover:text-black'><span>See Project</span> <BsArrowRight /></button>
                </div>
            </div>
        </div>
    );
};

export default ProjectsShowcase;