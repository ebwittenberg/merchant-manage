import { createStore } from 'redux';
import { inventoryReducer } from '../reducers/inventory';

const initialState = {
    inventory: [
        {
            id: 1001,
            name: 'dining table', 
            stock: '50',
            cost: 475.99,
            warehouseID: 23
        },
        {
            id: 1001,
            name: 'patio chair', 
            stock: 12,
            cost: 50.99,
            warehouseID: 23
        },
        {
            id: 1001,
            name: 'outdoor sofa', 
            stock: '14',
            cost: 498.99,
            warehouseID: 23
        },
        {
            id: 1001,
            name: 'bar stool', 
            stock: '32',
            cost: 67.99,
            warehouseID: 23
        },
        {
            id: 1001,
            name: 'outdoor pillow', 
            stock: 32,
            cost: 54.99,
            warehouseID: 23
        }
    ]
}

// need to pass reducer into this, and maybe initial state?
export const store = createStore(inventoryReducer, initialState)