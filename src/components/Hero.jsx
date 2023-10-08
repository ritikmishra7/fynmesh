import React from 'react'
import hero from '../assets/hero.png'
import herobanner from '../assets/herobanner.png'
import telegram from '../assets/telegram.webp'
import twitter from '../assets/twitter.png'
import docs from '../assets/docs.png'

function Hero() {
    return (
        <div className='flex w-full px-16 gap-10 py-24 justify-start'>
            <div className='flex flex-col w-2/4 gap-10'>
                <h1 className='text-[46px] text-[#172025] font-bold'>Decentralized Financial Signal Hosting Network</h1>
                <p className='text-[23px] text-[#244141] w-80 font-normal'>For Data Engineers, Traders and Everyone in between</p>
                <button className='w-fit py-4 px-10 text-lg text-[#F6F8FB] rounded-lg font-semibold hover:opacity-90 transitionBg'>
                    Join the waitlist
                </button>
            </div>
            <div className='flex flex-col w-1/3 relative'>
                <div className='flex items-center justify-center rounded-lg px-5 pb-4 pt-8 flex-col text-white gap-2 w-[200px] self-end transitionBg2 cursor-pointer z-10'>
                    <div className='p-4 rounded-full bg-white border-black border-2'>
                        <img src={docs} alt="docs" width={20} />
                    </div>
                    <p>Docs</p>
                </div>
                <div className='flex items-center justify-center rounded-lg px-5 pb-4 pt-8 flex-col text-white gap-2 w-[200px] mb-16 transitionBg2 cursor-pointer'>
                    <div className='p-4 rounded-full bg-white border-black border-2'>
                        <img src={telegram} alt="docs" width={20} />
                    </div>
                    <p>Telegram</p>
                </div>
                <div className='flex items-center justify-center rounded-lg px-5 pb-4 pt-8 flex-col text-white gap-2 w-[200px] -translate-x-64 transitionBg2 cursor-pointer'>
                    <div className='p-4 rounded-full bg-white border-black border-2'>
                        <img src={twitter} alt="docs" width={20} />
                    </div>
                    <p className='font-semibold'>Twitter</p>
                </div>
                <div className='absolute bgWrapper2 w-[888px] h-[573px]'></div>
            </div>
        </div>
    )
}

export default Hero