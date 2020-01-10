import React, { useState } from "react";

import { axiosWithAuth } from "../utils/axiosWithAuth";

const CartForm = props => {
  const [SKU, setSKU] = useState("");
  const [quantity, setQuantity] = useState("");

  const handleSubmit = e => {
    e.preventDefault();
    const id = localStorage.getItem('id');
    axiosWithAuth()
      .post(`/users/${id}/cart`, { SKU, quantity})
      .then(res => {
          console.log("these items have been added to your cart");
          console.log(res)})
      .catch(err => console.log(err));

    setSKU("");
    setQuantity("");
    
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="SKU"
          value={SKU}
          placeholder="SKU"
          onChange={e => setSKU(e.target.value)}
        />

        <input
          type="text"
          name="quantity"
          value={quantity}
          placeholder="Quantity"
          onChange={e => setQuantity(e.target.value)}
        />


        <button type="submit">Add To Cart</button>
      </form>
    </div>
  );
};

export default CartForm;