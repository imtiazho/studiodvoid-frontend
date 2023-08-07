import React, { useState } from 'react';
import logo from '../../Media/logo.png';
import { AiOutlineMenu } from 'react-icons/ai';
import SideNav from '../SideNav/SideNav';



const NavbarTwo = () => {
    const [navopen, setNavOpen] = useState(false);

    return (
        <div>
            <div className='absolute top-0 h-[80px] z-10 px-[5%] w-full flex justify-between items-center text-white'>
                <div className='w-[120px]'>
                    <img src={logo} alt="" />
                </div>

                <div className='flex items-center gap-[9rem]'>
                    <p className='text-[13px]'>Call us : + (898) 784 -7217</p>
                    <p className='text-[13px]'>Tatee.architecture@gmail.com</p>

                    <div className='cursor-pointer border border-white p-1 dropdown z-[100]' onClick={() => setNavOpen(!navopen)}>
                        <AiOutlineMenu />
                    </div>
                </div>
            </div>
            {navopen && <SideNav setNavOpen={setNavOpen} navopen={navopen} />}
        </div>
    );
};

export default NavbarTwo;