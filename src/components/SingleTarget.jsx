import React from 'react'

function SingleTarget({ title, description, image }) {
    return (
        <div className='w-[343px] h-[401px] text-center flex flex-col justify-center items-center gap-5 bg-[#E6FAFF] singleTargetWrapper overflow-x-hidden'>
            <img src={image} alt="target1" width={100} height={100} />
            <p className='text-2xl text-[#0093A7] font-medium w-[280px]'>{title}</p>
            <p className='text-base text-[#244141] w-[200px]'>
                {description}
            </p>
        </div>
    )
}

export default SingleTarget