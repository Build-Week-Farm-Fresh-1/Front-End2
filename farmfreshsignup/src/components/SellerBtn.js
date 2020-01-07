import React from "react";
import { useHistory } from "react-router-dom";

const SellerBtn = () => {
  const history = useHistory();

  const routeToSell = () => {
    console.log("Loading...");
    setTimeout(() => {
      history.push("/shop");
    }, 1500);
    // history.goBack();
  };

  return (
    <button className="md-button sell-button" onClick={routeToSell}>
      Click Here to Sell
    </button>
  );
};
export default SellerBtn;
