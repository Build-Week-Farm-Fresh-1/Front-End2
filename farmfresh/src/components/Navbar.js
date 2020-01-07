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
      <Shop />
      <Farms />
      <Account />
      <Search />
      <Link to="/login"><SignIn/></Link>
      <SellerBtn />
    </div>
  );
};
export default Navbar;