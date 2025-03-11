'use client'

import Item from "./item.js";
import React from 'react';
import ReactDOM from 'react-dom';
import { useState } from "react";

function ItemList({ items }) 
{   
    const [sortBy, setSortBy] = useState("name");
    

    if(sortBy === "name") 
        {
            items.sort((a,b) => a.name.localeCompare(b.name)); 
        }
    else if(sortBy === "category") 
        {
            items.sort((a,b) => a.category.localeCompare(b.category));
        }
    else if(sortBy === "quantity") 
        {
            items.sort((a,b) => a.quantity - b.quantity);
            items.reverse();
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