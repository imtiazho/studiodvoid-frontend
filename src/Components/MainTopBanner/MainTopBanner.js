import React from 'react';
import banner1 from '../../Media/bt-1.jpg';
import banner2 from '../../Media/bt-2.jpg';
import banner3 from '../../Media/bt-3.jpg';
import banner4 from '../../Media/bt-4.jpg';
import { Link } from 'react-router-dom';
import { FaLongArrowAltRight } from 'react-icons/fa';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import './styles.css';
// import required modules
import { Autoplay, Pagination } from 'swiper/modules';
import NavbarTwo from '../NavbarTwo/NavbarTwo';


const positioningForBannerText = {
    left: "20%",
    top: "30%",
    transform: "translateX(-50%)",

}
const bannerMotoStyle = {
    color: "white",
    fontSize: "45px",
    fontWeight: "700",

}

const MainTopBanner = () => {
    const pagination = {
        clickable: true,
        renderBullet: function (index, className) {
            return '<p class="' + className + '">' + ("0" + (index + 1)) + '</p>';
        },
    };

    return (
        <div className='relative h-[100vh]'>
            <NavbarTwo />
            <Swiper
                spaceBetween={30}
                centeredSlides={true}
                autoplay={{
                    delay: 3500,
                    disableOnInteraction: false,
                }}
                pagination={pagination}
                modules={[Autoplay, Pagination]}
            >
                <SwiperSlide>
                    <div id="item1" className="carousel-item w-full relative overflow-hidden">
                        <div className="grid grid-cols-4 w-[80%] mx-auto h-full z-[5] absolute">
                            <div className='h-[100vh] border-[#f2f2f2] opacity-[0.1]'></div>
                            <div className='border-l h-[100vh] border-[#f2f2f2] opacity-[0.1]'></div>
                            <div className='border-l h-[100vh] border-[#f2f2f2] opacity-[0.1]'></div>
                            <div className='border-l border-r h-[100vh] border-[#f2f2f2] opacity-[0.1]'></div>
                        </div>
                        <img src={banner1} className="w-full h-[100vh] object-cover relative forAnimation" alt='Banner' />
                        <div className='absolute w-full h-full bg-[#000] opacity-[0.1]  z-1'></div>
                        <div style={positioningForBannerText} className='absolute text-left z-10'>
                            <p className='text-[12px] tracking-widest mb-2 text-white'>WE ARE STUDIO D' VOID</p>
                            <h1 className='leading-sung' style={bannerMotoStyle}>Catena Homestay</h1>
                            <p className='text-[15px] mt-6 text-white leading-loose uppercase tracking-[5px]'>Sherbrooke . Canada</p>

                            <Link to='/projects' className='btn border-none bg-transparent text-white font-normal rounded-none mt-10 hover:bg-primary hover:text-black flex items-center gap-2 w-fit'>
                                <span>Projects</span>
                                <FaLongArrowAltRight />
                            </Link>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div id="item1" className="carousel-item w-full relative overflow-hidden">
                        <div className="grid grid-cols-4 w-[80%] mx-auto h-full z-[5] absolute">
                            <div className='h-[100vh] border-[#f2f2f2] opacity-[0.1]'></div>
                            <div className='border-l h-[100vh] border-[#f2f2f2] opacity-[0.1]'></div>
                            <div className='border-l h-[100vh] border-[#f2f2f2] opacity-[0.1]'></div>
                            <div className='border-l border-r h-[100vh] border-[#f2f2f2] opacity-[0.1]'></div>
                        </div>
                        <img src={banner2} className="w-full h-[100vh] object-cover relative forAnimation" alt='Banner' />
                        <div className='absolute w-full h-full bg-[#000] opacity-[0.1]  z-1'></div>
                        <div style={positioningForBannerText} className='absolute text-left z-10'>
                            <p className='text-[12px] tracking-widest mb-2 text-white'>WE ARE STUDIO D' VOID</p>
                            <h1 className='leading-sung' style={bannerMotoStyle}>Mountain House</h1>
                            <p className='text-[15px] mt-6 text-white leading-loose uppercase tracking-[5px]'>Ontario . Canadaa</p>

                            <Link to='/projects' className='btn border-none bg-transparent text-white font-normal rounded-none mt-10 hover:bg-primary hover:text-black flex items-center gap-2 w-fit'>
                                <span>Projects</span>
                                <FaLongArrowAltRight />
                            </Link>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div id="item1" className="carousel-item w-full relative overflow-hidden">
                        <div className="grid grid-cols-4 w-[80%] mx-auto h-full z-[5] absolute">
                            <div className='h-[100vh] border-[#f2f2f2] opacity-[0.1]'></div>
                            <div className='border-l h-[100vh] border-[#f2f2f2] opacity-[0.1]'></div>
                            <div className='border-l h-[100vh] border-[#f2f2f2] opacity-[0.1]'></div>
                            <div className='border-l border-r h-[100vh] border-[#f2f2f2] opacity-[0.1]'></div>
                        </div>
                        <img src={banner3} className="w-full h-[100vh] object-cover relative forAnimation" alt='Banner' />
                        <div className='absolute w-full h-full bg-[#000] opacity-[0.1]  z-1'></div>
                        <div style={positioningForBannerText} className='absolute text-left z-10'>
                            <p className='text-[12px] tracking-widest mb-2 text-white'>WE ARE STUDIO D' VOID</p>
                            <h1 className='leading-sung' style={bannerMotoStyle}>Brave Homestay</h1>
                            <p className='text-[15px] mt-6 text-white leading-loose uppercase tracking-[5px]'>New york . USA</p>

                            <Link to='/projects' className='btn border-none bg-transparent text-white font-normal rounded-none mt-10 hover:bg-primary hover:text-black flex items-center gap-2 w-fit'>
                                <span>Projects</span>
                                <FaLongArrowAltRight />
                            </Link>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div id="item1" className="carousel-item w-full relative overflow-hidden">
                        <div className="grid grid-cols-4 w-[80%] mx-auto h-full z-[5] absolute">
                            <div className='h-[100vh] border-[#f2f2f2] opacity-[0.1]'></div>
                            <div className='border-l h-[100vh] border-[#f2f2f2] opacity-[0.1]'></div>
                            <div className='border-l h-[100vh] border-[#f2f2f2] opacity-[0.1]'></div>
                            <div className='border-l border-r h-[100vh] border-[#f2f2f2] opacity-[0.1]'></div>
                        </div>
                        <img src={banner4} className="w-full h-[100vh] object-cover relative forAnimation" alt='Banner' />
                        <div className='absolute w-full h-full bg-[#000] opacity-[0.1]  z-1'></div>
                        <div style={positioningForBannerText} className='absolute text-left z-10'>
                            <p className='text-[12px] tracking-widest mb-2 text-white'>WE ARE STUDIO D' VOID</p>
                            <h1 className='leading-sung' style={bannerMotoStyle}>Vanilla Resort</h1>
                            <p className='text-[15px] mt-6 text-white leading-loose uppercase tracking-[5px]'>Toronto . Canada</p>

                            <Link to='/projects' className='btn border-none bg-transparent text-white font-normal rounded-none mt-10 hover:bg-primary hover:text-black flex items-center gap-2 w-fit'>
                                <span>Projects</span>
                                <FaLongArrowAltRight />
                            </Link>
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>
            {/* <NavbarTwo />
            <div className=''>
                <div id="item1" className="carousel-item w-full relative overflow-hidden">
                    <div className="grid grid-cols-4 w-[80%] mx-auto h-full z-[5] absolute">
                        <div className='h-[100vh] border-[#f2f2f2] opacity-[0.1]'>2</div>
                        <div className='border-l h-[100vh] border-[#f2f2f2] opacity-[0.1]'>1</div>
                        <div className='border-l h-[100vh] border-[#f2f2f2] opacity-[0.1]'>3</div>
                        <div className='border-l border-r h-[100vh] border-[#f2f2f2] opacity-[0.1]'>4</div>
                    </div>
                    <img src={banner1} className="w-full h-[100vh] object-cover relative" />
                    <div className='absolute w-full h-full bg-[#000] opacity-[0.1]  z-1'></div>
                    <div style={positioningForBannerText} className='absolute text-left z-10'>
                        <p className='text-[12px] tracking-widest mb-2 text-white'>WE ARE STUDIO D' VOID</p>
                        <h1 className='leading-sung' style={bannerMotoStyle}>Architectural Consultancy & Interior Design</h1>
                        <p className='text-[13px] mt-6 w-5/6 text-white leading-loose'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut . . .</p>

                        <Link className='btn border-primary border-2 bg-transparent text-primary font-normal rounded-none mt-10 hover:bg-primary hover:border-transparent hover:text-black'>Projects</Link>
                    </div>
                </div>
            </div> */}
        </div>
    );
};

export default MainTopBanner;