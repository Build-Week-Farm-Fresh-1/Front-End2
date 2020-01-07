import React, {useState, useEffect} from 'react';
import {Route} from "react-router-dom";
import Navbar from "./components/Navbar";
import Homepage from "./components/Home";
import './App.css';

import CartContext from "./components/contexts/CartContext";

function App() {

  const [products] = useState(); //put Data in here
  const [cart, setCart] = useState(
    localStorage.getItem("cart") ? JSON.parse(localStorage.getItem("cart")) : []
  );

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  const [empty, setEmpty] = useState([]);

  // const addItem = item => {
  //   setCart(cart.filter(item => item.id !== itemId));
  // };

  function clearCart() {
    setCart(empty);
  }
  return (
    <div className="App">
      <CartContext.Provider value={{cart, setCart}}>
      <Navbar/>
      <Route exact path="/" component={Homepage}/>
      </CartContext.Provider>
    </div>
  );
}

export default App;

