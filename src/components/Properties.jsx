import React from 'react'
import SingleProperties from './SingleProperties'
import fishimg from '../assets/fishbg.png'

function Properties() {

    const data = [
        {
            title: 'Immutabilty',
            description: 'Access and ownership cannot be revoked'
        },
        {
            title: 'Accountability',
            description: 'Accountability is created through transparency'
        },
        {
            title: 'Ownership',
            description: 'True ownership on decentralized clouds'
        },
        {
            title: 'Privacy',
            description: 'Data generators can stay anonymous, in closed groups and provide access if desired'
        },
        {
            title: 'Security',
            description: 'Multiple layers of measures to increase and verify security'
        },
    ]

    return (
        <div className='bg-[#EDF2FA] relative overflow-hidden'>
            <div className='grid grid-cols-3 mx-10 py-20 gap-[590px] border-b-[1px] border-solid border-[#87CFF6]'>
                <p className='text-5xl text-[#2B0A6C] font-bold w-[605px]'>Enable better signals, decision making and trading results</p>
                <p className='text-2xl text-[#2B0A6C] font-medium w-[530px] col-span-2'>Community curated data, with more privacy through decentralization and accountability through staking. Aggregate protected data, securely.</p>
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