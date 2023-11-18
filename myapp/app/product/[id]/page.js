'use client'
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addProduct } from "@/redux/cartSlice";

const getData = async (id) => {
  const res = await fetch(`http://localhost:3000/api/product/${id}`, { cache: "no-store" });

  if (!res.ok) {
    throw new Error("Failed");
  }
  return res.json();
};

const ProductDetail = async ({ params }) => {
  const [quantity, setQuantity] = useState(1);
  const dispatch = useDispatch();

  const { id } = params;
  const product = await getData(id);

  const handleQuantityChange = (event) => {
    setQuantity(parseInt(event.target.value, 10));
  };

  const handleAddToCart = () => {
    dispatch(addProduct({ ...product, quantity }));
    // You may want to redirect the user to the cart page or show a confirmation message.
  };

  return (
    <section>
      <h1>{product.name}</h1>
      <p>{product.desc}</p>
      <img src={product.img} alt={product.name} />
      <p>Price: ${product.price}</p>

      <label>
        Quantity:
        <select value={quantity} onChange={handleQuantityChange}>
          {[1, 2, 3, 4, 5].map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
      </label>

      <button onClick={handleAddToCart}>Add to Cart</button>
    </section>
  );
};

export default ProductDetail;
