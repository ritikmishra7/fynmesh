import React, { useState, useEffect } from 'react'
import swirl from '../assets/swirl.png'

function Swirl({ texts, fixed }) {
    const [index, setIndex] = useState(0)
    const [isFadingOut, setIsFadingOut] = useState(false);
    const [rotation, setRotation] = useState(0);

    const handleScroll = () => {
        const scrollY = window.scrollY;
        const newRotation = scrollY * 0.1; // Adjust the rotation speed as needed
        setRotation(newRotation);
    };

    const changeText = () => {
        setIsFadingOut(true);

        setTimeout(() => {
            setIndex((index + 1) % texts.length);
            setIsFadingOut(false);
        }, 500);
    };

    useEffect(() => {
        const interval = setInterval(changeText, 2000);

        return () => {
            clearInterval(interval);
        };
    }, [index]);

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);


        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);
    return (
        <div className='relative flex flex-col items-center justify-center gap-5'>
            <div className='absolute w-[500px] h-[500px]'>
                <img
                    src={swirl} alt="swirl"
                    width={600}
                    height={600}
                    style={{ transform: `rotate(${rotation}deg)` }}
                />
            </div>
            <p className={`text-[64px] text-white font-bold swirl-container ${isFadingOut ? 'fade-out' : 'fade=in'}`}>{texts[index]}</p>
            <p className='text-[28px] text-white font-bold text-center w-96'>{fixed}</p>
        </div>
    )
}

export default Swirl