import React from 'react'
import external from '../assets/external.webp'

function SingleProblem({ problem, solution, link, side }) {
    return (
        <div className={`flex items-center pb-14 ${side === 'left' ? 'flex-row' : 'flex-row-reverse'}`}>
            <div className='problemWrapper pt-14 pb-24 flex items-center justify-center w-[70%]'>
                <p className='text-4xl font-bold text-white translate-y-4'>{problem}</p>
            </div>
            <div className='solutionWrapper flex items-center flex-col gap-2 w-[30%] pt-10 pb-12 translate-y-1 rounded-xl'>
                <p className='text-4xl text-[#2c71ff]'>{solution}</p>
                <p className='text-xl flex items-center gap-4'>
                    <span className='cursor-pointer hover:text-[#2c71ff]'>{link}</span>
                    <img src={external} alt="external link" width={20} height={20} className='hover:opacity-80 cursor-pointer' />
                </p>
            </div>
        </div>
    )
}

export default SingleProblem