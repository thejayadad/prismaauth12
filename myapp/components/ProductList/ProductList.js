import React from 'react'
import ProductCard from './ProductCard'

const ProductList = ({products}) => {
  return (
    <ul className='flex flex-wrap gap-4 mt-8 justify-center bg-white p-4 rounded-lg'>
        {
            products.map(product => (
                <ProductCard key={product.id} product={product} />
            ))
        }
    </ul>
  )
}

export default ProductList