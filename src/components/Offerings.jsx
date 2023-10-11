import React from 'react'
import SingleOffering from './SingleOffering'
import offer1 from '../assets/offer1.webp'
import offer2 from '../assets/offer2.webp'
import offer3 from '../assets/offer3.webp'
import offer4 from '../assets/offer4.webp'


function Offerings() {
    const data = [
        {
            title: 'Join as a Partner',
            description: 'Supply your data and inquire what you require',
            image: offer1
        },
        {
            title: 'Explore Our Data & Services',
            description: 'Discover valuable datasets or collaborate with us',
            image: offer2
        },
        {
            title: 'Investment Opportunities',
            description: 'Learn about Pre-sales, pricing, ICO, and our roadmap',
            image: offer3
        },
        {
            title: 'Make a Contribution',
            description: 'Earn from your crypto data, algorithms, or signals',
            image: offer4
        },
    ];

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