import React from "react";
import Logo from "../components/Navbar Components/Logo";
import Shop from "../components/Navbar Components/Shop";
import Farms from "../components/Navbar Components/Farms";
import Account from "../components/Navbar Components/Account";
import Search from "../components/Navbar Components/Search";
import SignIn from "../components/Navbar Components/SignIn";
import SellerBtn from "../components/Navbar Components/SellerBtn";

const Navbar = () => {
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
export default Navbar;