

async function getData(){
  const res = await fetch("http://localhost:3000/api/product", { cache: 'no-store' })
  if(!res.ok){
    throw new Error("Failed to fetch data")
  }
  return res.json();
}
import ProductList from '@/components/ProductList/ProductList';
import React from 'react'

const Home = async () => {
  const products = await getData()
  return (
    <section>
      <h1>All Wallets</h1>
      <ProductList products={products} />
    </section>
  )
}

export default Home