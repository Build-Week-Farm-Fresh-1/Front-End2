import React from "react";
import { Link } from "react-router-dom";
import SignIn from "./SignIn";
import ShoppingCartImg from "./ShoppingCartImg";

import Shop from "./Shop";
import Farms from "./Farms";
import Account from "./Account";
import Logo from "./Logo";

const Navigation = () => {
  return (
    <div className="nav-content">
      <Logo />

      <Shop />

      <Farms />
      <ShoppingCartImg />
      <Account />

      <Link to="/login">
        <SignIn />
      </Link>
    </div>
  );
};
export default Navigation;
