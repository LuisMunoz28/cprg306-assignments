import Item from "./item.js";
import React from 'react';
import ReactDOM from 'react-dom';
import { useState } from "react";
import items from "./items.json";

function ItemList() 
{
    const [sortBy, setSortBy] = useState("name");
    
    if(sortBy === "name") 
        {

        }
    else if(sortBy === "category") 
        {

        }

    return (
        <div>

        </div>
    )

}

export default ItemList;