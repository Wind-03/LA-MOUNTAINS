/* eslint-disable no-unused-vars */
import React from 'react'
import bg from "./assets/climb-bg-edit.jpg"

function Climb() {
  return (
    <div className='-mt-4'>
        <div className="bg-white pb-6">
            <div className="w-4/5 mx-auto mt-4 flex flex-col gap-y-6 md:flex-row items-center gap-x-6">
                <h1 className='flex items-center text-[#abb1c9] font-bold'>
                    <span className='text-8xl lg:text-[9rem]'>02.</span>
                    <span className='mt-[17%] -ml-[12%] text-2xl lg:text-[2.5rem] text-[#626a93]'>CLIMB</span>
                </h1>
                <p className='text-black text-sm md:text-base'>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                    Molestiae magni est ipsam veritatis. Enim harum laborum dignissimos praesentium cumque. 
                    Dolore sequi harum omnis eius ipsam quod id beatae enim rerum.
                    A town hall different from bala blu, blue blu bulaba. broom broom broom brooooooooom. Bala blu blue blu bulaba. The farmers will make more money. Your lunch will not be imported, cassava garri ewa and ehhh ehhhhnn. 
                    The farmer will make money, the dinner would be cassava, eba, ewa and everything.</p>
            </div>
        </div>
        <div className='bg-[#2b3358] flex gap-x-4 text-2xl text-gray-300 font-semibold'>
            <button className='ml-[10%] hover:bg-gray-300 active:bg-gray-500 hover:text-[#2b3358] active:text-[#2b3358] hover:underline active:underline px-4'>MOUNTAIN 1</button>
            <button className='hover:bg-gray-300 active:bg-gray-500 hover:text-[#2b3358] active:text-[#2b3358] hover:underline active:underline px-4'>MOUNTAIN 2</button>
        </div>
        <div className='relative pb-10'>
            <img src={bg} alt="" className='-z-10 object-cover h-full' />
            <div className="schedule bg-gray-100 pl-4 py-2 md:py-4 pr-24 w-fit bg-opacity-75 absolute top-2 md:top-[10%] left-[10%]">
                <h1 className='text-xl md:text-5xl text-[#2b3358] font-semibold mb-2 md:mb-4'>SCHEDULE</h1> 
                <ul className='text-black text-sm md:text-base'>
                    <li><span className='mr-8 mb-2 md:mb-4'>2022-01-01</span>Activity 1</li>
                    <li><span className='mr-8 mb-2 md:mb-4'>2022-01-02</span>Activity 2</li>
                    <li><span className='mr-8 mb-2 md:mb-4'>2022-01-03</span>Activity 3</li>
                    <li><span className='mr-8 mb-2 md:mb-4'>2022-01-03</span>Activity 3</li>
                </ul>
            </div>
            <div className="footer absolute bottom-0 bg-[#2b3358] w-full bg-opacity-95">
                <span className='w-4/5 mx-auto  flex justify-between py-2 '>
                <img src="" alt="LOGO" />
                <p className='text-[#616890]'>Copyright 2016. All rights Reserved</p>
                </span>
            </div>
        </div>
    </div>
  )
}

export default Climb