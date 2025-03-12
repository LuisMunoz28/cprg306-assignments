'use client'

import Item from "./item.js";
import React from 'react';
import ReactDOM from 'react-dom';
import { useState } from "react";

function ItemList({ items }) 
{   
    const [sortBy, setSortBy] = useState("name");
    
    let itemsCopy = items;
    if(sortBy === "name") 
        {
            itemsCopy.sort((a,b) => a.name.localeCompare(b.name)); 
        }
    else if(sortBy === "category") 
        {
            itemsCopy.sort((a,b) => a.category.localeCompare(b.category));
        }
    else if(sortBy === "quantity") 
        {
            itemsCopy.sort((a,b) => a.quantity - b.quantity);
            itemsCopy.reverse();
        }

    return (
        <div>
            <button onClick={() => (setSortBy("name"))} 
            className={sortBy === "name" ? "bg-blue-600 m-1 p-1 rounded-lg" : "bg-blue-400 m-1 p-1 rounded-lg"} 
            >Sort By Name</button>
            <button onClick={() => (setSortBy("category"))} 
            className={sortBy === "category" ? "bg-blue-600 m-1 p-1 rounded-lg" : "bg-blue-400 m-1 p-1 rounded-lg"} 
            >Sort By Category</button>
            <button onClick={() => (setSortBy("quantity"))} 
            className={sortBy === "quantity" ? "bg-blue-600 m-1 p-1 rounded-lg" : "bg-blue-400 m-1 p-1 rounded-lg"} 
            >Sort By Quantity</button>
            <ul>
                {items.map((item) => <Item key={item.id} name={item.name} quantity={item.quantity} category={item.category} />)}
            </ul>

        </div>
    )

    
}

export default ItemList;