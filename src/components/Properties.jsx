import React from 'react'
import SingleProperties from './SingleProperties'
import fishimg from '../assets/fishbg.png'

function Properties() {

    const data = [
        {
            title: 'Indelibility',
            description: 'Access and proprietorship are irrevocable'
        },
        {
            title: 'Responsibility',
            description: 'Transparency fosters accountability creation'
        },
        {
            title: 'Possession',
            description: 'Authentic ownership in decentralized clouds'
        },
        {
            title: 'Anonymity',
            description: 'Data creators remain anonymous, in private groups, and grant access when chosen'
        },
        {
            title: 'Safeguarding',
            description: 'Various levels of actions to enhance and confirm security'
        },
    ];



    return (
        <div className='bg-[#EDF2FA] relative overflow-hidden'>
            <div className='grid grid-cols-3 mx-10 py-20 gap-[590px] border-b-[1px] border-solid border-[#87CFF6]'>
                <p className='text-5xl text-[#2B0A6C] font-bold w-[605px]'>Facilitate better signals, decision making, and trading outcomes</p>
                <p className='text-2xl text-[#2B0A6C] font-medium w-[530px] col-span-2'>Community-curated data, enhanced with superior privacy via decentralization and ensured accountability through staking. Securely aggregate protected data.</p>
            </div>
            <div>
                {
                    data.map((item, index) => (
                        <SingleProperties key={index} title={item.title} description={item.description} />
                    ))
                }
            </div>
            <div className='absolute -top-40 -right-[1400px]'>
                <img src={fishimg} alt="fish-img" />
            </div>
            <div className='absolute -bottom-[480px] -left-[1350px] rotate-180'>
                <img src={fishimg} alt="fish-img" />
            </div>

        </div>
    )
}

export default Properties