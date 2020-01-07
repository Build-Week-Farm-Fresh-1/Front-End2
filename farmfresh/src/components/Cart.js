import React, {useContext} from "react";
import Item from "./CartItem";
//import {NavLink} from "react-router-dom";
import CartContext from "../components/contexts/CartContext";

const Cart = () => {
    const {cart, removeItem, clearCart} = useContext(CartContext);

    return (
        <div className="cart">
            

            <div className="cart-title">
                Shopping Cart
            </div>

            <div className="cart-checkout">

            <div className="cart-list">
            {/* {cart.map(item=> (
                <Item key={item.id} {...item} removeItem={removeItem} />
            ))} */}
            <Item/>
            </div>

            <div className="totalCart">
                <div className="orderSummary">
                <p>Order Summary</p>
                </div>
                <p>Total Items:  8</p>
                <p>Total (tax included): $34.99 </p>
                <button> Go To Checkout </button>
            </div>
            </div>
        </div>

    )
}

export default Cart;