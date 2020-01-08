import React from "react";
import { Link } from "react-router-dom";
import SignIn from "./SignIn";

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

      <Account />

      <Link to="/login">
        <SignIn />
      </Link>
    </div>
  );
};
export default Navigation;
