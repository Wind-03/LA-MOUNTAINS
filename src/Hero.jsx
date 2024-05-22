/* eslint-disable no-unused-vars */
import React from 'react'
import Navbar from './Navbar' 
import mt from "./assets/mt-bg.png"

function Hero() {
  return (
    <div className='bg-[url("./assets/cut-bg.png")] bg-cover relative h-full bg-white'>
        <Navbar />
        <header className='text-3xl leading-7 md:text-7xl md:leading-[4rem] lg:text-8xl lg:leading-[5rem] font-bold xl:text-[10rem] text-center mt-6 md:mt-24 xl:mt-36 -ml-[5%] -z-10 uppercase lg:font-medium -tracking-wide xl:leading-[9rem]'>
            <h1 className='text-stone-500'>LosAngeles</h1>
            <h1 className='text-[#2b3358] tracking-normal'>Mountains</h1>
        </header>
        <img src={mt} alt="" className='object-contain -mt-12 md:-mt-24 lg:-mt-32 xl:-mt-56'/>
    </div>
  )
}

export default Hero