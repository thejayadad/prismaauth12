'use client'
import Link from 'next/link'
import React from 'react'
import AuthLinks from '../AuthLinks'

const Navbar = () => {
  return (
    <header className='px-4 py-24 text-gray-600'>
        <div className='flex justify-between container mx-auto p-5 md:flex-row items-center'>
            <Link className='text-4xl' href={'/'}>Home</Link>
            <div className='flex'>
                <AuthLinks/>
            </div>
        </div>
    </header>
  )
}

export default Navbar