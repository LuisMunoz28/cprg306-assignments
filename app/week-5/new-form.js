'use client'

import { useState } from "react";

function NewForm() 
{
    const [name, setName] = useState(" ");

    const [category, setCategory] = useState("Produce");

    const [quantity, setQuantity] = useState(1);    
    

    const handleNameChange = (event) => {
        setName(event.target.value)
    }
    const handleCategoryChange = (event) => {
        setCategory(event.target.value)
    }
    const handleQuantityChange = (event) => {
        setQuantity(event.target.value)
    }



    const handleSubmit = (event) => {
        event.preventDefault();

        const item = {
            name: name,
            quantity: quantity,
            category: category
        };

        console.log(item)

        alert(`Name: ${name} | Quantity: ${quantity} | Category: ${category}`)

        setName("");
        setCategory("Produce");
        setQuantity(1);
    }

/**I made the Quantity input tag of type "number" because the component I created on week 4 did not look good with the other input areas */
    return(
        <form onSubmit={handleSubmit}>
            
            <label htmlFor="nameField" className="m-2">Name:</label>
            <input type="text" id="nameField" name="nameField" value={name} onChange={handleNameChange} required className="text-black rounded-lg"/>
            
            
            <label htmlFor="quantityField" className="m-2">Quantity:</label>
            <input type="number" id="quantityField" name="quantityField" min="1" max="20" value={quantity} onChange={handleQuantityChange} className="text-black rounded-lg"/>
            
            <label htmlFor="categoryField" className="m-2">Category:</label>
            <select id="categoryField" name="categoryField" onChange={handleCategoryChange} className="text-black m-2 rounded-lg">
                <option value="Produce">Produce</option>
                <option value="Dairy">Dairy</option>
                <option value="Bakery">Bakery</option>
                <option value="Meat">Meat</option>
                <option value="Frozen Foods">Frozen Foods</option>
                <option value="Canned Goods">Canned Goods</option>
                <option value="Dry Goods">Dry Goods</option>
                <option value="Beverages">Beverages</option>
                <option value="Snacks">Snacks</option>
                <option value="Household">Household</option>
                <option value="Other">Other</option>
            </select>

            <input type="submit" className="bg-blue-800 p-2 m-1 rounded-xl"/>
        </form>
    )
}

export default NewForm;