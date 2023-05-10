import React from 'react';
import { BsFacebook, BsPinterest, BsYoutube } from 'react-icons/bs';
import { AiFillLinkedin, AiOutlineInstagram } from 'react-icons/ai';
import { Link } from 'react-router-dom';

const VerticalSocial = () => {
    return (
        <div className='absolute bottom-[7rem] right-[20px] text-white flex flex-col gap-8'>
            <Link><BsFacebook /></Link>
            <Link><AiOutlineInstagram /></Link>
            <Link><AiFillLinkedin /></Link>
            <Link><BsPinterest /></Link>
            <Link><BsYoutube /></Link>
        </div>
    );
};

export default VerticalSocial;