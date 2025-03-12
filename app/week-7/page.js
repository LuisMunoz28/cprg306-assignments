'use client'

import ItemList from "./item-list.js";
import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import NewForm from "./new-form.js";
import itemsData from "./items.json";

function Page() 
{
    const [items, setItems] = useState(itemsData);

    const handleAddItem = (event) => {
        setItems([...items,event]);
    }

    return(
        <main>
            <h1>Shopping List</h1>
            <NewForm onAddItem={handleAddItem}></NewForm>
            <ItemList items={items}></ItemList>
        </main>
    )
}

export default Page;