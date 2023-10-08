import React from 'react'
import Swirl from './Swirl'

function Features() {
    const data =
        [
            {
                texts: ['Find', 'Share', 'Compute'],
                fixed: 'Datasets, collaborators & missing infos'
            },
            {
                texts: ['Innovate', 'Accelerate', 'Trade'],
                fixed: 'with Fynmesh'
            }
        ]
    return (
        <div className='featureWrapper flex justify-around items-center px-10 py-72 -translate-y-1'>
            {data.map((item, index) => (
                <Swirl key={index} texts={item.texts} fixed={item.fixed} />
            ))
            }
        </div>
    )
}

export default Features