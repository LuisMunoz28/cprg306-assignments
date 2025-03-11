'use client'

import ItemList from "./item-list.js";
import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import NewForm from "./new-form.js";
import itemsData from "./items.json";
import { hadUnsupportedValue } from "next/dist/build/analysis/get-page-static-info.js";

function Page() 
{
    const [items, setItems] = useState(itemsData);

    const handleAddItem = (event) => {
        // handle Adding item
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