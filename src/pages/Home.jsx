import React from 'react'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import Features from '../components/Features'
import Problems from '../components/Problems'
import Target from '../components/Target'
import Properties from '../components/Properties'
import Offerings from '../components/Offerings'
import Subscribe from '../components/Subscribe'

function Home() {
    return (
        <div className='relative'>
            <div className='bgWrapper'>
                <Navbar />
                <Hero />
            </div>
            <Features />
            <Problems />
            <Target />
            <Properties />
            <Offerings />
            <Subscribe />
        </div>
    )
}

export default Home