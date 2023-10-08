import React from 'react'
import SingleProblem from './SingleProblem'

function Problems() {
    const data = [
        {
            problem: 'Data remains in silos',
            solution: 'Monetize',
            link: 'Data with Fynmesh',
        },
        {
            problem: 'It’s hard to validate data',
            solution: 'Validate',
            link: 'Data with Fynmesh',
        },
        {
            problem: 'High computing workload volatility',
            solution: 'Share resources',
            link: 'with Fynmesh',
        },
        {
            problem: 'Data is extremely expensive',
            solution: 'Save',
            link: 'Money with Fynmesh',
        },
    ]
    return (
        <div className='mt-36 relative overflow-hidden'>
            <p className='px-14 text-[#172025] font-bold text-center text-[47px] mb-10 pb-1'>We know your <span className='text-[#2B0A6C]'>problems</span> and offer the reasonable <span className='text-[#2C71FF]'>solution</span></p>
            <div className='px-14'>
                {
                    data.map((item, index) => (
                        <SingleProblem key={index} problem={item.problem} solution={item.solution} link={item.link} side={index % 2 === 0 ? 'left' : 'right'} />
                    ))
                }
            </div>
            <div className='problemOuterWrapper absolute overflow-hidden -translate-y-[800px] -z-10 opacity-100'>
            </div>
        </div>
    )
}

export default Problems