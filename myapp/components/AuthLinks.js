'use client'
import Link from "next/link";
import { useState } from "react";
import { signOut, useSession } from "next-auth/react";

import React from 'react'

const AuthLinks = () => {
    const [open, setOpen] = useState(false);
    const { status } = useSession();
  return (
    <>
        {status === "unauthenticated" ? (
        <Link href="/login">
          Login
        </Link>
      ) : (
        <>
          <Link href="/write">
            Write
          </Link>
          <span onClick={signOut}>
            Logout
          </span>
        </>
      )}
      <div className='bg-red-500' onClick={() => setOpen(!open)}>
        <div className='bg-red-500'></div>
        <div className='bg-red-500'></div>
        <div className='bg-red-500'></div>
      </div>
      {open && (
        <div>
          <Link href="/">Homepage</Link>
          <Link href="/">About</Link>
          <Link href="/">Contact</Link>
          {status === "notauthenticated" ? (
            <Link href="/login">Login</Link>
          ) : (
            <>
              <Link href="/write">Write</Link>
              <span>Logout</span>
            </>
          )}
        </div>
      )}
    </>
  )
}

export default AuthLinks