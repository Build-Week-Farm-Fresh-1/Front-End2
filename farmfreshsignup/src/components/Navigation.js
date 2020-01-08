import React from "react";
import { Link } from "react-router-dom";
import SignIn from "./SignIn";
import NewAccountPage from "./NewAccountPage";
import Shop from "./Shop";
import Farms from "./Farms";
import Account from "./Account";
import Logo from "./Logo";

import Search from "./Search";

import SellerBtn from "./SellerBtn";

const Navigation = () => {
  return (
    <div className="nav-content">
      <Logo />

      <Shop />

      <Farms />

      <Account />

      <Search />
      <Link to="/login">
        <SignIn />
      </Link>

      <SellerBtn />
    </div>
  );
};
export default Navigation;
