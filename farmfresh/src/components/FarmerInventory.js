import React, { useState, useEffect } from "react";
import {axiosWithAuth} from "../utils/axiosWithAuth";
import EditForm from "./EditForm";

const FarmerInventory = (props) => {

    const deleteItem = e => {
        // e.preventDefault();
        const id = localStorage.getItem('id');
		axiosWithAuth().delete(`/farmers/${id}/inventory/${props.SKU}`)
		.then(res => console.log("deleted: ", res))
		.catch(err=> console.log(err));
	}

    return(
        <div className="item">
            <h4>{props.name}</h4>
            <img height="75px" width="75px" src={props.pic}/>
            <p>Price: {props.price}</p>
            <p>Farm: {props.farmerID}</p>
            <p>SKU: {props.SKU}</p>
            <p>PLU: {props.PLU}</p>
            <p>Quantity: {props.quantity}</p>
            <button onClick={deleteItem}>Delete from inventory</button>
            <EditForm SKU={props.SKU}/>
        </div>
    )

}

export default FarmerInventory;