import React from 'react';
import ReactDOM from 'react-dom';

function Item({name, quantity, category}) 
{
    return(
        <div>
            <ul className="m-2 p-2 bg-blue-800 w-64 rounded-lg">
                <li>Name: {name}</li>
                <li>Quantity: {quantity}</li>
                <li>Category: {category}</li>
            </ul>
        </div>
    )
}

export default Item;