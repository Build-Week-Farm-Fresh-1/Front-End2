import React from "react";
import { NavLink, Link, Route } from "react-router-dom";
import Logo from "./Logo";
import Shop from "./Shop";
import Farms from "./Farms";
import Account from "./Account";
import Search from "./Search";

import SellerBtn from "./SellerBtn";
import SignInPage from "./SignInPage";
import NewAccountPage from "./NewAccountPage";

const Navigation = () => {
  return (
    <>
      <div className="nav-content">
        <NavLink to="/logo">FarmerPal</NavLink>
        <NavLink to="/shop">Shop</NavLink>
        <NavLink to="/farms">Farms</NavLink>
        <NavLink to="/account">Account</NavLink>
        <Search />
        <NavLink to="/signIn">Sign In</NavLink>
        <SellerBtn />
      </div>
      <Route path="/">
        <Logo />
      </Route>
      <Route path="/shop">
        <Shop />
      </Route>
      <Route path="/farms">
        <Farms />
      </Route>
      <Route path="/signIn">
        <SignInPage />
      </Route>
      <Route path="/account">
        <Account />
      </Route>
    </>
  );
};
export default Navigation;
