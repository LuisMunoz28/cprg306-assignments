import ItemList from "./item-list.js";
import React from 'react';
import ReactDOM from 'react-dom';

function Page() 
{
    return(
        <main>
            <h1>Shopping List</h1>
            <ItemList></ItemList>
        </main>
    )
}

export default Page;