import React from 'react'
import SingleOffering from './SingleOffering'
import offer1 from '../assets/offer1.webp'
import offer2 from '../assets/offer2.webp'
import offer3 from '../assets/offer3.webp'
import offer4 from '../assets/offer4.webp'


function Offerings() {
    const data = [
        {
            title: 'Become a partner',
            description: 'Provide data you have and query what you need',
            image: offer1
        },
        {
            title: 'Test our data and services',
            description: 'Find new valuable datasets or build with us',
            image: offer2
        },
        {
            title: 'Invest',
            description: 'Get infos about Pre-sales, pricing, the ICO or roadmap',
            image: offer3
        },
        {
            title: 'Contribute',
            description: 'Monetize your crypto data, algorithms or signals',
            image: offer4
        },
    ]
    return (
        <div className='overflow-x-hidden bg-[rgba(230,250,255,0.7)]'>
            <div className='offerWrapper flex flex-col items-start py-20 gap-20 w-[3840px]' id='offerings'>
                <p className='text-5xl text-[#2B0A6C] font-bold pt-6 ml-[600px]'>Our offering</p>
                <div className='flex items-center justify-start gap-4 pl-10'>
                    {
                        data.map((item, index) => (
                            <SingleOffering key={index} title={item.title} description={item.description} image={item.image} />
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default Offerings