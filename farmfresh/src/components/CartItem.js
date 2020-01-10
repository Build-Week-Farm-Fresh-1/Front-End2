import React, { useState, useEffect } from "react";
import {axiosWithAuth} from "../utils/axiosWithAuth";


const CartItem = props => {

    const removeItem = e => {
         e.preventDefault();
         //Incomplete delete request in API? 
		axiosWithAuth().delete(`/users/92/cart/`, {data: {SKU: `${props.SKU}`}})
		.then(res => console.log("deleted: ", res))
		.catch(err=> console.log(err));
	}

    return (
        <div className="cartItem">
        
                <h4>{props.name}</h4>
                <p>SKU: {props.SKU}</p>
                <p>Quantity: {props.quantity}</p>
                {/* <p>Amount: {props.increment}</p> */}
                <p>Price: $ {props.price} : {props.increment}</p>
                <p>Total Price: ${props.price*props.quantity}</p>
            
            <button className="remove" onClick={removeItem}>Remove</button>
        </div>
    )
}
export default CartItem;