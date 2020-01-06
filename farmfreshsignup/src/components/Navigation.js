import React from "react";
import Logo from "./Logo";
import Shop from "./Shop";
import Farms from "./Farms";
import Account from "./Account";
import Search from "./Search";
import SignIn from "./SignIn";
import SellerBtn from "./SellerBtn";

const Navigation = () => {
  return (
    <div className="nav-content">
      <Logo />
      <Shop />
      <Farms />
      <Account />
      <Search />
      <SignIn />
      <SellerBtn />
    </div>
  );
};
export default Navigation;
