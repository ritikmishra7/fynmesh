import React from 'react'
import newtab from '../assets/newtab.webp'

function SingleProperties({ title, description }) {
    return (
        <div className='grid grid-cols-3 gap-[600px] border-b-[1px] border-solid border-[#87CFF6] py-20 mx-10'>
            <p className='text-4xl text-[#172025] flex items-center'>{title}</p>
            <div className='col-span-2 flex items-center gap-72'>
                <p className='text-2xl text-[#244141] flex items-center col-span-2 max-w-[400px]'>{description}</p>
                <div className='w-[65px] h-[64px] cursor-pointer flex items-center'>
                    <img src={newtab} alt="external-link" />
                </div>
            </div>
        </div>
    )
}

export default SingleProperties