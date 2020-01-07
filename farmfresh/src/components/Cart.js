import React, {useContext} from "react";
//import {NavLink} from "react-router-dom";
import CartContext from "../components/contexts/CartContext";

const Cart = () => {
    const {cart, removeItem, clearCart} = useContext(CartContext);

    return (
        <div>
            {cart.map(item=> (
                <Item key={item.id} {...item} removeItem={removeItem} />
            ))}
        </div>

    )
}