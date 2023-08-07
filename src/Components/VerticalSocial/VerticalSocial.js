import React from 'react';
import { BsFacebook, BsPinterest, BsYoutube } from 'react-icons/bs';
import { AiFillLinkedin, AiOutlineInstagram } from 'react-icons/ai';
import { Link } from 'react-router-dom';

const VerticalSocial = () => {
    const dateRn = new Date().getFullYear();
    return (
        <div>
            <div className='absolute bottom-[58px] right-[20px] text-white flex flex-col gap-8 z-[11]'>
                <Link className='hover:text-[#3b5998] text-[14px] duration-200'><BsFacebook /></Link>
                <Link className='hover:text-[#d62976] text-[14px] duration-200'><AiOutlineInstagram /></Link>
                <Link className='hover:text-[#0072b1] text-[14px] duration-200'><AiFillLinkedin /></Link>
                <Link className='hover:text-[#c8232c] text-[14px] duration-200'><BsPinterest /></Link>
                <Link className='hover:text-[#c4302b] text-[14px] duration-200'><BsYoutube /></Link>
            </div>
            <div className='absolute bottom-[89px] left-[-11px] text-white z-[10] rotate-90'>
                <p className='text-[13px]'>© {dateRn} TATEE</p>
            </div>
        </div>
    );
};

export default VerticalSocial;