import React, {useState, useEffect} from 'react';
import {Route} from "react-router-dom";
import Navbar from "./components/Navbar";
import Homepage from "./components/Home";
import Cart from "./components/Cart";
import SignIn from "./components/SignInPage";
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
      
      <Navbar/>
      <Route exact path="/" component={Homepage}/>
      <Route exact path="/login" component={SignIn} />
       <CartContext.Provider value={{cart, setCart}}>
      <Route exact path="/cart" component={Cart}/>
      
      </CartContext.Provider>
    </div>
  );
}

export default App;
