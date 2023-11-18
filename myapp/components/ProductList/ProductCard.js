"use client";

import React, { useState } from "react";

import axios from "axios";
import { useRouter } from "next/navigation";
import Link from "next/link";


const ProductCard = ({product}) => {    
    const router = useRouter();

  return (
    <div key={product.id}>
      <Link href={`/product/${product.id}`}>
      <span>{product.name}</span>

        <img
        src={product.img}
        />
        <p>{product.desc}</p>
      </Link>
    </div>
  )
}

export default ProductCard