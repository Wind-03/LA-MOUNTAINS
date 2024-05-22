/* eslint-disable no-unused-vars */
import React from 'react'
import Navbar from './Navbar'
import ImageSlider from './components/ImageSlider'

function History() {
  return (
    <div className='bg-[url("./assets/hbg-edit.jpg")] bg-no-repeat bg-cover'>
        <div className="w-full bg-white mx-auto">
            <div className='w-4/5 mx-auto py-3'>
                <nav className='flex justify-between'>
                    <img src="" alt="LOGO" />
                    <ul className='flex gap-x-5 underline font-semibold text-lg text-black'>
                        <li><a href="/about">01. History</a></li>
                        <li><a href="/contact">02. Team</a></li>
                    </ul>
                </nav>
            </div>
        </div>
        <div className="w-4/5 mx-auto mt-12 md:mt-36">
            <h1 className='flex items-center text-[#abb1c9] font-bold'>
                <span className='text-8xl lg:text-[9rem]'>01.</span>
                <span className='mt-[5%] -ml-[3%] xl:mt-[3%] xl:-ml-[2%] text-2xl lg:text-[2.5rem] text-[#626a93]'>HISTORY</span>
            </h1>
            <p className='text-black text-sm md:text-base'>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                Molestiae magni est ipsam veritatis. Enim harum laborum dignissimos praesentium cumque. 
                Dolore sequi harum omnis eius ipsam quod id beatae enim rerum.
                A town hall different from bala blu, blue blu bulaba. broom broom broom brooooooooom. Bala blu blue blu bulaba. The farmers will make more money. Your lunch will not be imported, cassava garri ewa and ehhh ehhhhnn. 
                The farmer will make money, the dinner would be cassava, eba, ewa and everything.</p>
        </div>
        <ImageSlider />
    </div>
  )
}

export default History