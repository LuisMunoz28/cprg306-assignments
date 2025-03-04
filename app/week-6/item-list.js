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
            items.sort((a,b) => a.name.LocaleCompare(b.name)); 
        }
    else if(sortBy === "category") 
        {
            items.sort((a,b) => a.category.LocaleCompare(b.category));
        }

    return (
        <div>

        </div>
    )

}

export default ItemList;