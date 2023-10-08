import React, { useState } from 'react';
import logo from '../assets/logo.png';
import { PiDotsThreeVerticalBold } from 'react-icons/pi';

function Navbar() {
    const [active, setActive] = useState(false);

    const sliderOpenClasses =
        'flex flex-col md:flex-row lg:flex-row sm:text-base md:text-lg lg:text-2xl items-center gap-10 lg:gap-36 md:gap-20 animate-fade-in h-[64px]';

    return (
        <div className="flex items-center flex-col-reverse gap-4 justify-between py-10 px-14 md:flex-row relative">
            <div
                className={
                    active
                        ? 'hidden items-center gap-2 transition-opacity opacity-0'
                        : 'flex items-center gap-2 p-1'
                }
            >
                <img src={logo} alt="fynmesh logo" width={40} />
                <p className="font-bold text-4xl text-[#2CB3CB] p-2">fynmesh</p>
            </div>
            <div
                className={
                    active
                        ? 'absolute left-0 top-0 h-full bg-[#87CFF6] w-full -z-10 transition-all duration-500'
                        : 'absolute left-0 top-0 -translate-y-full h-full bg-[#87CFF6] w-full -z-10 transition-all duration-500'
                }
            ></div>
            <div
                className={
                    active
                        ? sliderOpenClasses
                        : 'hidden'
                }
            >
                <a href="#linkhere"><p className='cursor-pointer text-[#2B0A6C] hover:text-[#2E0A6C]'>How Fynmesh works</p></a>
                <a href="#target"><p className='cursor-pointer text-[#2B0A6C] hover:text-[#2E0A6C]'>Target audience</p></a>
                <a href="#offerings"><p className='cursor-pointer text-[#2B0A6C] hover:text-[#2E0A6C]'>Our offering</p></a>
                <a href="#signup"><p className='cursor-pointer text-[#2B0A6C] hover:text-[#2E0A6C]'>Sign up</p></a>
            </div>
            <div
                className={
                    active
                        ? 'bg-[#F6FAFB] rounded-xl p-2 cursor-pointer -rotate-90 transition-all'
                        : 'bg-[#F6FAFB] rounded-xl p-2 cursor-pointer transition-all'
                }
                onClick={() => setActive(!active)}
            >
                <PiDotsThreeVerticalBold size={24} />
            </div>
        </div>
    );
}

export default Navbar;
