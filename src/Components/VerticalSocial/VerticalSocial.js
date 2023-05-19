import React from 'react';
import { BsFacebook, BsPinterest, BsYoutube } from 'react-icons/bs';
import { AiFillLinkedin, AiOutlineInstagram } from 'react-icons/ai';
import { Link } from 'react-router-dom';

const VerticalSocial = () => {
    return (
        <div className='absolute bottom-[7rem] right-[20px] text-white flex flex-col gap-8'>
            <Link className='hover:text-[#3b5998] duration-200'><BsFacebook /></Link>
            <Link className='hover:text-[#d62976] duration-200'><AiOutlineInstagram /></Link>
            <Link className='hover:text-[#0072b1] duration-200'><AiFillLinkedin /></Link>
            <Link className='hover:text-[#c8232c] duration-200'><BsPinterest /></Link>
            <Link className='hover:text-[#c4302b] duration-200'><BsYoutube /></Link>
        </div>
    );
};

export default VerticalSocial;