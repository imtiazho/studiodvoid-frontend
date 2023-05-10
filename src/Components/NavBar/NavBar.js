import React, { useState } from 'react';
import logo from '../../Media/logo.png';
import { Link } from 'react-router-dom';
import { FaBars } from 'react-icons/fa';
import { ImCross } from 'react-icons/im';

const NavBar = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    return (
        <div className='text-white'>
            <div className='absolute top-0 h-[80px] z-10 px-[5%] flex justify-between items-center w-full pt-[1.5rem]'>
                <div className='w-[160px]'>
                    <img src={logo} alt="" />
                </div>

                <ul className='flex items-center gap-20'>
                    <li className='text-[13px] font-medium'><Link to='/'>HOME</Link></li>
                    <li className='text-[13px] font-medium'><Link to='/about'>ABOUT</Link></li>
                    <li className='text-[13px] font-medium'><Link to='/projects'>PROJECTS</Link></li>
                    <li className='text-[13px] font-medium'><Link to='/blogs'>BLOGS</Link></li>
                    <li className='text-[13px] font-medium'><Link to='/contact-us'>CONTACTS</Link></li>
                </ul>

                <div className='cursor-pointer hidden' onClick={() => setMenuOpen(!menuOpen)}>
                    {
                        menuOpen ? <ImCross /> : <FaBars />
                    }
                </div>
            </div>
        </div>
    );
};

export default NavBar;