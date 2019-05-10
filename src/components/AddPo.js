import React from 'react';
import { store } from '../store';

function AddPo({ onStockChange, onItemChange, inputValue, handleFormSubmit, selectedItem }) {
    const inventory = store.getState().inventory;

    const options = inventory.map((item, i) => <option key={i}>{item.id}</option>)

    return (
        <form
            onSubmit={(e) => {
                e.preventDefault();
                handleFormSubmit();
            }}
        >
            <select
                onChange={(e) => onItemChange(e.target.value)}
                value={selectedItem}
            >
                <option disabled>Item ID</option>
                {
                    options
                }
            </select>

            <input 
                type="number"
                onChange={(e) => onStockChange(e.target.value)}
                value={inputValue}
                placeholder="Purchase Quantity"
            />

            <button type="submit">Submit PO</button>
        </form>
    )


}


export default AddPo;