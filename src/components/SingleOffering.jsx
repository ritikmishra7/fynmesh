import React from 'react'
import offer1 from '../assets/offer1.webp'

function SingleOffering({ title, description, image }) {
    return (
        <div className='w-[350px] h-[400px] singleofferWrapper flex flex-col items-center justify-center gap-5'>
            <img src={image} alt="target1" width={100} height={100} />
            <p className='text-2xl text-[#2B0A6C] font-medium w-[280px] text-center max-w-[168px]'>{title}</p>
            <p className='text-base text-white w-[200px] text-center'>
                {description}
            </p>
        </div>
    )
}

export default SingleOffering