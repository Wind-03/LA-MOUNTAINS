/* eslint-disable no-unused-vars */
import React from 'react'

function Navbar() {
  return (
    <div className='w-4/5 mx-auto pt-3'>
        <nav className='flex justify-between'>
            <img src="" alt="LOGO" />
            <ul className='flex gap-x-5 underline font-semibold text-lg'>
                <li><a href="/about">01. History</a></li>
                <li><a href="/contact">02. Team</a></li>
            </ul>
        </nav>
    </div>
  )
}

export default Navbar