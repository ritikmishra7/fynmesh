import React from 'react'
import SingleTarget from './SingleTarget'
import target1 from '../assets/target1.webp'
import target2 from '../assets/target2.webp'
import target3 from '../assets/target3.webp'
import target4 from '../assets/target4.webp'
import target5 from '../assets/target5.webp'
import behindTarget from '../assets/belowtargetbanner.png'

function Target() {

    const data = [
        {
            title: 'Data and computing resource aftermarket',
            description: 'Sell your data and excess computing resources on our marketplace',
            image: target1
        },
        {
            title: 'Data and Algorithm testing',
            description: 'Test your data, combine it with other datasets and identify correlations',
            image: target2
        },
        {
            title: 'Private and anonymous collaboration',
            description: 'Find, match with and collaborate with other investors in a trustless ecosystem',
            image: target3
        },
        {
            title: 'Market making',
            description: 'Apply market trends, order book data and prices on various platforms into your market making algorithms',
            image: target4
        },
        {
            title: 'Alpha generation',
            description: 'Find profitable trading indicators & test strategies at a fraction of the cost, and workload',
            image: target5
        },
    ]

    return (
        <div className='overflow-x-hidden' id='target'>
            <div className='relative pb-44 targetWrapper w-[3840px]' style={{ overflowX: 'hidden' }}>
                <div className='overflow-x-hidden'>
                    <div className='px-10 pt-32 overflow-x-hidden'>
                        <div className='flex items-center justify-around mb-20 overflow-x-hidden w-[90vw]'>
                            <p className='text-5xl text-[#2B0A6C] font-bold w-[50%]'>For data scientists, quant traders and data providers</p>
                            <p className='text-2xl text-[#2B0A6C] w-[40%]'>Monetize existing compute and storage resources and avoid using centralized clouds. Buy and sell datasets on our marketplace and sign up for our experimental AI tools.</p>
                        </div>
                        <div className='flex flex-wrap gap-20 items-center justify-center overflow-x-hidden w-[90vw]'>
                            {
                                data.map((item, index) => (
                                    <SingleTarget key={index} title={item.title} description={item.description} image={item.image} />
                                ))
                            }
                        </div>
                    </div>
                </div>
                <div className='h-[430px] absolute bottom-0 -z-10 left-[-430px] w-[3840px] overflow-x-hidden'>
                    <div className='behindTarget' style={{ overflowX: 'hidden' }}>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Target