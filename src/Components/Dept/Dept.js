import React from 'react';
import service1 from '../../Media/service-01.jpg';
import service2 from '../../Media/service-02.jpg';
import service3 from '../../Media/service-03.jpg';
import { Link } from 'react-router-dom';

const Dept = () => {
    return (
        <div className='w-9/12 pt-10 mx-auto grid grid-cols-3'>
            <div className='py-40 px-8 flex flex-col gap-6 text-accent border-l border-[#272727]'>
                <div className='px-14'>
                    <img className='rounded-full p-2 border border-[#272727] ' src={service1} alt="" />
                </div>
                <Link className='text-xl font-[500] text-secondary'>ARCHITECTURE</Link>
                <p className='text-[13px] font-[300]'>Lorem ipsum dolor sit amet, consectetur adipist pricing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            </div>
            <div className='py-40 px-8 flex flex-col gap-6 text-accent border-l border-[#272727]'>
                <div className='px-14'>
                    <img className='rounded-full p-2 border border-[#272727] ' src={service2} alt="" />
                </div>
                <Link className='text-xl font-[500] text-secondary'>INTERIOR</Link>
                <p className='text-[13px] font-[300]'>Lorem ipsum dolor sit amet, consectetur adipist pricing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            </div>
            <div className='py-40 px-8 flex flex-col gap-6 text-accent border-l border-r border-[#272727]'>
                <div className='px-14'>
                    <img className='rounded-full p-2 border border-[#272727] ' src={service3} alt="" />
                </div>
                <Link className='text-xl font-[500] text-secondary'>PLANNING</Link>
                <p className='text-[13px] font-[300]'>Lorem ipsum dolor sit amet, consectetur adipist pricing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            </div>
        </div>
    );
};

export default Dept;