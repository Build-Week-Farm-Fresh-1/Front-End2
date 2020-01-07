import React from "react";
import { Link, Switch, Route } from "react-router-dom";
import Logo from "./Logo";
import Shop from "./Shop";
import Farms from "./Farms";
import Account from "./Account";
import Search from "./Search";
import SignIn from "./SignIn";
import SellerBtn from "./SellerBtn";
import SignInPage from "./SignInPage";

const Navigation = () => {
  return (
    <>
      <nav>
        <div className="nav-content">
          <Link to="/">FarmerPal</Link>
          <Link to="/shop">Shop</Link>
          <Link to="/farms">Farms</Link>
          <Link to="/account">Account</Link>
          <Search />
          <Link to="/signIn">Sign In</Link>
          <SellerBtn />
        </div>
      </nav>
      <Switch>
        <Route exact path="/">
          <Logo />
        </Route>
        <Route exact path="/shop">
          <Shop />
        </Route>
        <Route exact path="/farms">
          <Farms />
        </Route>
        <Route exact path="/account">
          <Account />
        </Route>
        <Route exact path="/signIn">
          <SignInPage />
        </Route>
        <Route exact path="/signIn">
          <SignIn />
        </Route>
      </Switch>
    </>
  );
};
export default Navigation;
