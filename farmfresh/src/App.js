import React, {useState, useEffect} from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";

import Navbar from "./components/Navbar";
import Homepage from "./components/Home";
import Cart from "./components/Cart";
import SignIn from "./components/SignInPage";
import NewAccountPage from './components/NewAccountPage';
import ShopperViewInventory from "./components/ShopperViewInventory";
import './App.css';

import CartContext from "./components/contexts/CartContext";
import ShopperHomepage from './components/ShopperHomepage';
import FarmerProfile from './components/FarmerProfile';

import PrivateRoute from "./components/PrivateRoute";
import FarmerLogin from './components/FarmerLogin';
import NewFarmer from "./components/NewFarmer";



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
      <Route exact path="/create" component={NewAccountPage}/>
      <Route exact path="/farmerlogin" component={FarmerLogin}/>
      <Route exact path="/createfarmer" component={NewFarmer}/>
      <Switch>
      <CartContext.Provider value={{cart, setCart}}>

      <PrivateRoute path="/shopperinventory" component={ShopperViewInventory}/>
      <PrivateRoute exact path="/shopperhome" component={ShopperHomepage}/>
      <PrivateRoute exact path="/farmerprofile" component={FarmerProfile}/>
       
      <PrivateRoute exact path="/cart" component={Cart}/>
      
      </CartContext.Provider>
      </Switch>
    </div>
  );
}

export default App;
