"use client"

import { useState } from "react"

function NewItem()
{
    const [name, setName] = useState("");

    const [category, setCategory] = useState("Produce");

    const [quantity, setQuantity] = useState(1);    
    
    const increment = () => 
    {
        if(quantity < 20 ) 
            {
                setQuantity(quantity + 1)
            }
    }

    const decrement = () =>
    {
        if(quantity > 1) 
            {
                setQuantity( quantity - 1)
            }
    }

    return (
        <div>
            <h1>The quantity is {quantity}</h1>
            <button className="p-2 m-1 bg-blue-600 rounded-xl hover:bg-blue-400 hover:text-black disabled:bg-gray-600" onClick={decrement} disabled={quantity <= 1} >Decrement!</button>
            <button className="p-2 m-1 bg-blue-600 rounded-xl hover:bg-blue-400 hover:text-black disabled:bg-gray-600" onClick={increment} disabled={quantity >= 20} >Increment!</button>
        </div>
    )
}

export default NewItem;