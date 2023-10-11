import React from 'react'
import SingleProblem from './SingleProblem'

function Problems() {
    const data = [
        {
            problem: 'Data stays isolated in storage units',
            solution: 'Generate Revenue',
            link: 'Data with Fynmesh',
        },
        {
            problem: 'Verifying data poses challenges',
            solution: 'Confirm',
            link: 'Data with Fynmesh',
        },
        {
            problem: 'Elevated variability in computational workload',
            solution: 'Distribute resources',
            link: 'with Fynmesh',
        },
        {
            problem: 'Data incurs a significant cost.',
            solution: 'Save',
            link: 'Money with Fynmesh',
        },
    ]
    return (
        <div className='mt-36 relative overflow-hidden'>
            <p className='px-14 text-[#172025] font-bold text-center text-[47px] mb-10 pb-1'>We understand your <span className='text-[#2B0A6C]'>challenges</span> and provide <span className='text-[#2C71FF]'>solutions</span></p>
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