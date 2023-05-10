import React from 'react';
import logo from '../../Media/logo.png';

const SubFooter = () => {
    const today = new Date().getFullYear();

    return (
        <div className='flex flex-col gap-16'>
            <div className='w-5/6 mx-auto grid grid-cols-3 text-left gap-20 text-[#ddd]'>
                <div className='flex flex-col gap-4'>
                    <p className='text-3xl font-[600]'>+ MEET US</p>
                    <p className='text-[15px] font-[300] leading-loose'>Address : 991 White St . Dawsonville GA 30534 , New York</p>
                </div>
                <div className='flex flex-col gap-4'>
                    <p className='text-3xl font-[600]'>+ CALL US</p>
                    <p className='text-[15px] font-[300] leading-loose'>Phone : + (898) 784-7217</p>
                </div>
                <div className='flex flex-col gap-4'>
                    <p className='text-3xl font-[600]'>+ TEXT US</p>
                    <p className='text-[15px] font-[300] leading-loose'>Email : Tatee.architecture@gmail.com</p>
                </div>
            </div>

            <div className='w-5/6 mx-auto grid grid-cols-3 items-center text-[#ddd] py-16'>
                <img className='w-[150px]' src={logo} alt="" />
                <p className='text-[14px]'>Designed by vollosoft</p>
                <p className='text-[14px]'>© {today} TATEE . All rights reserved</p>
            </div>
        </div>
    );
};

export default SubFooter;