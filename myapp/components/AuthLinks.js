'use client'
import Link from "next/link";
import { useState } from "react";
import { signOut, useSession } from "next-auth/react";
import { useSelector } from "react-redux";
import { AiOutlineShoppingCart, AiOutlineHeart } from 'react-icons/ai'


import React from 'react'

const AuthLinks = () => {
    const [open, setOpen] = useState(false);
    const { status } = useSession();
    const products = useSelector((state) => state.cart.products)
    return (
    <>
        {status === "unauthenticated" ? (
        <Link href="/login">
          Login
        </Link>
      ) : (
        <>
          <Link href="/cart">
            <span>{products?.length}</span>
            <AiOutlineShoppingCart />
          </Link>
          <span onClick={signOut}>
            Logout
          </span>
        </>
      )}
    </>
  )
}

export default AuthLinks