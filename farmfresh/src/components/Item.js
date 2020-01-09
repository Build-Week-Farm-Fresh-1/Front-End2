import React, { useState, useEffect } from "react";

const Item = (props) => {



    return(
        <div className="item">
            <h4>{props.name}</h4>
            <img height="75px" width="75px" src={props.pic}/>
            <p>Price: {props.price}</p>
            <p>Farm: {props.farmerID}</p>
            <button onClick={props.addItem}>Add To Cart</button>
        </div>
    )

}

export default Item;