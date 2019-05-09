import React from 'react';
import { store } from '../store';

function AddPo({ onStockChange, onItemChange, inputValue, handleFormSubmit }) {
    const inventory = store.getState().inventory;

    const options = inventory.map(item => <option>{item.id}</option>)

    return (
        <form
            onSubmit={(e) => {
                e.preventDefault();
                handleFormSubmit();
            }}
        >
            <select
                onChange={(e) => onItemChange(e.target.value)}
            >
                {
                    options
                }
            </select>

            <input 
                type="number"
                onChange={(e) => onStockChange(e.target.value)}
                value={inputValue}
            />

            <button type="submit">Submit PO</button>
        </form>
    )


}


export default AddPo;