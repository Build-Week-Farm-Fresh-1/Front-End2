import React from "react";
import Logo from "../components/Navbar Components/Logo";
import Shop from "../components/Navbar Components/Shop";
import Farms from "../components/Navbar Components/Farms";
import Account from "../components/Navbar Components/Account";
import Search from "../components/Navbar Components/Search";
import SignIn from "../components/Navbar Components/SignIn";
import SellerBtn from "../components/Navbar Components/SellerBtn";

import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="nav-content">
      <Logo />
      <Link to="shopperinventory"><Shop /></Link>
     <Link to="farmerprofile"><Farms /></Link> 
     <Link to="/shopperhome"> <Account /></Link>
      <Search />
      <Link to="/login"><SignIn/></Link>
      <Link to="/farmerlogin"><SellerBtn /></Link>
    </div>
  );
};
export default Navbar;