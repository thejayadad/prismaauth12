'use client'
import Link from 'next/link'
import React from 'react'
import AuthLinks from '../AuthLinks'

const Navbar = () => {
  return (
    <header className='px-4 py-8'>
        <div className='flex justify-between'>
            <Link href={'/'}>Home</Link>
            <div className='flex'>
                <AuthLinks/>
            </div>
        </div>
    </header>
  )
}

export default Navbar