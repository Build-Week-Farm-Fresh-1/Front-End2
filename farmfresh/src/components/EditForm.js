import React, { useState } from "react";

import { axiosWithAuth } from "../utils/axiosWithAuth";

const EditForm = props => {
  const [PLU, setPLU] = useState("");
  const [quantity, setQuantity] = useState("");
  const [increment, setIncrement] = useState("");
  const [price, setPrice] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    const id = localStorage.getItem('id');
    axiosWithAuth()
      .post(`/farmers/${id}/inventory/${props.SKU}`, { PLU, quantity, increment, price})
      .then(res => console.log(res))
      .catch(err => console.log(err));

    setPLU("");
    setQuantity("");
    setIncrement("");
    setPrice("");
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="number"
          name="PLU"
          value={PLU}
          placeholder="PLU"
          onChange={e => setPLU(e.target.value)}
        />

        <input
          type="number"
          name="quantity"
          value={quantity}
          placeholder="Quantity"
          onChange={e => setQuantity(e.target.value)}
        />

        <input
          type="text"
          name="increment"
          value={increment}
          placeholder="Lbs or Each"
          onChange={e => setIncrement(e.target.value)}
        />
        <input
          type="number"
          name="price"
          value={price}
          placeholder="New Price"
          onChange={e => setPrice(e.target.value)}
        />

        <button type="submit">Submit Changes</button>
      </form>
    </div>
  );
};

export default EditForm;

