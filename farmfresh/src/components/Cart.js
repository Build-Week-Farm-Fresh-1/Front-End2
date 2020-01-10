import React, {useContext} from "react";
import CartItem from "./CartItem";
//import {NavLink} from "react-router-dom";
import CartContext from "../components/contexts/CartContext";
import {axiosWithAuth} from "../utils/axiosWithAuth";

const Cart = () => {
    const {cart, setCart, removeItem, clearCart} = useContext(CartContext);

    const getCart = () => {
        const id = localStorage.getItem('id');
        console.log("id:" , id);
        axiosWithAuth().get(`/users/${id}/cart`)
        .then(res => {
            console.log(res.data); 
            setCart(res.data);
        })
        .catch(err => console.log(err));
    }

    return (
        <div className="cart">
            

            <div className="cart-title">
                Shopping Cart
                <button onClick={getCart}>Cart Summary</button>
            </div>

            <div className="cart-checkout">

            <div className="cart-list">
                {console.log("cart", cart)}
            {cart.map(item=> (
                <CartItem key={item.SKU} {...item} setCart={setCart} removeItem={removeItem} cart={cart} />
            ))}
            <CartItem/>
            </div>

            <div className="totalCart">
                <div className="orderSummary">
                <p>Order Summary</p>
                </div>
                <p>Total Items:  {cart.length}</p>
                <p>Total (tax included): $34.99 </p>
                <button> Go To Checkout </button>
            </div>
            </div>
        </div>

    )
}

export default Cart;