'use client'
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { loadStripe } from '@stripe/stripe-js'
import { removeProduct } from "@/redux/cartSlice";
import { AiOutlineClose } from 'react-icons/ai'


const Cart = () => {
  const {products} = useSelector((state) => state.cart);
  const dispatch = useDispatch()
  const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLIC_KEY);

  const handleRemoveProduct = (product) => {
    dispatch(removeProduct({ id: product?.id }))
}

  const handleCheckout = async () => {
    const lineItems = products.map((product) => {
        return {
            price_data: {
                currency: "usd",
                product_data: {
                    name: product.name
                },
                unit_amount: product.price * 100
            },
            quantity: product.quantity
        }
    })

    const res = await fetch("http://localhost:3000/api/checkout", {
        headers: {
            "Content-Type": "application/json",
        },
        method: "POST",
        body: JSON.stringify(lineItems)
    })

    const data = await res.json()

    const stripe = await stripePromise

    await stripe.redirectToCheckout({ sessionId: data.id })
}


  return (
    <section>
      <h2>Cart Items</h2>
      <table>
        <tbody>
          <tr>
            <th>Product</th>
            <th>Name</th>
            <th>Description</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>Total</th>
          </tr>
          {products?.map((product) => (
            <tr key={product._id}>
              <td>
                <img src={product.img} alt={product.name} />
              </td>
              <td>
                <span>{product.name}</span>
              </td>
              <td>
                <span>{product.desc}</span>
              </td>
              <td>
                <span>{product.price}</span>
              </td>
              <td>
                <span>{product.quantity}</span>
              </td>
              <td>
                <span>{product.price * product.quantity}</span>
              </td>
              <td>
              <span onClick={handleCheckout} disabled={products?.length === 0}>
                            Order
              </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );
};

export default Cart;
