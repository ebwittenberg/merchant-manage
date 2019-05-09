import React from 'react';
import { store } from '../store';
import Item from './Item';
import AddPo from './AddPo';

function InventoryDashboard() {
    const state = store.getState();
    return (
        <div>
            <h2>Inventory Dashboard</h2>

            <AddPo />
            <table>
                <tbody>
                    <tr>
                        <th>Item ID</th>
                        <th>Name</th>
                        <th>Stock</th>
                    </tr>


                    {
                        state.inventory.map(i => <Item details={i} />)
                    }


                </tbody>
            </table>


        </div>


    )
}

export default InventoryDashboard