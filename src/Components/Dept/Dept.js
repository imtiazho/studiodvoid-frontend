import React from 'react';
import service1 from '../../Media/service-01.jpg';
import service2 from '../../Media/service-02.jpg';
import service3 from '../../Media/service-03.jpg';

const Dept = () => {
    return (
        <div className='w-9/12 mt-10 mx-auto grid grid-cols-3'>
            <div className='py-40 px-8 flex flex-col gap-6 text-[#8c8c8c] border-l border-[#272727]'>
                <div className='px-14'>
                    <img className='rounded-full p-2 border border-[#272727] ' src={service1} alt="" />
                </div>
                <h1 className='text-xl font-[500] text-[#b4b4b4]'>ARCHITECTURE</h1>
                <p className='text-[13px] font-[300]'>Lorem ipsum dolor sit amet, consectetur adipist pricing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            </div>
            <div className='py-40 px-8 flex flex-col gap-6 text-[#8c8c8c] border-l border-[#272727]'>
                <div className='px-14'>
                    <img className='rounded-full p-2 border border-[#272727] ' src={service2} alt="" />
                </div>
                <h1 className='text-xl font-[500] text-[#b4b4b4]'>INTERIOR</h1>
                <p className='text-[13px] font-[300]'>Lorem ipsum dolor sit amet, consectetur adipist pricing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            </div>
            <div className='py-40 px-8 flex flex-col gap-6 text-[#8c8c8c] border-l border-r border-[#272727]'>
                <div className='px-14'>
                    <img className='rounded-full p-2 border border-[#272727] ' src={service3} alt="" />
                </div>
                <h1 className='text-xl font-[500] text-[#b4b4b4]'>PLANNING</h1>
                <p className='text-[13px] font-[300]'>Lorem ipsum dolor sit amet, consectetur adipist pricing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            </div>
        </div>
    );
};

export default Dept;