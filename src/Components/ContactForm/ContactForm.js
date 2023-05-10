import React from 'react';

const ContactForm = () => {
    return (
        <div className='relative'>
            <p className='absolute text-white rotate-90 right-[-40px] top-[50%] bottom-[50%] text-[15px]'>CONTACTS US</p>
            <div className='w-5/6 mx-auto'>

                <div>
                    <iframe className='w-full h-[400px]' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14606.07014452533!2d90.34947030121289!3d23.76457825856824!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c09f9ba3d447%3A0x1babce9f1c6c95a3!2sMohammadpur%2C%20Dhaka!5e0!3m2!1sen!2sbd!4v1682776155373!5m2!1sen!2sbd" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                </div>
                <div className='grid grid-cols-3 my-20 gap-8'>
                    <div className='col-span-1 flex flex-col gap-6 text-left text-[#ddd]'>
                        <div className=''>
                            <p className='text-[18px] font-[600] mb-[3px]'>ADDRESS:</p>
                            <p className='text-[14px]'>991 White St . Dawsonville GA 30534 , New York</p>
                        </div>
                        <div className=''>
                            <p className='text-[18px] font-[600] mb-[3px]'>PHONE NUMBER:</p>
                            <p className='text-[14px]'>+ (898) 784-7217</p>
                        </div>
                        <div className=''>
                            <p className='text-[18px] font-[600] mb-[3px]'>EMAIL:</p>
                            <p className='text-[14px]'>Tatee.architecture@gmail.com</p>
                        </div>
                    </div>
                    <div className='col-span-2'>
                        <form>
                            <div className='grid grid-cols-2 items-start gap-10'>
                                <div className='flex flex-col gap-8'>
                                    <input placeholder='Full Name*' type="text" className='w-full focus:outline-0 h-full bg-white p-[1rem] text-black' />
                                    <input placeholder='Email' type="email" className='w-full focus:outline-0 h-full bg-white p-[1rem] text-black' />
                                    <input placeholder='Subject' type="text" className='w-full focus:outline-0 h-full bg-white p-[1rem] text-black' />
                                </div>
                                <textarea rows='5' placeholder='Message' type="text" className='w-full focus:outline-0 h-full bg-white p-[1rem] text-black resize-none'></textarea>
                            </div>
                            <input className='mt-8 w-full border-0 bg-primary text-black p-[1rem] rounded-none cursor-pointer btn hover:bg-primary' type="submit" value='SUBMIT NOW' />
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactForm;