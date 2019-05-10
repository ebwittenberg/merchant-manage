// reducer needs to handle action creators related to inventory
// reducer is always passed in the current state, and action


export function inventoryReducer(state='', action) {
    // switch, case statement here...
    switch(action.type) {
        case 'ACTION_ADJUST_STOCK':
            console.log(action);
            // create a new PO in tracking tab
            const trackingObject = {
                itemID: parseInt(action.payload.itemID),
                purchaseQty: parseInt(action.payload.purchaseQty),
                trackingNum: '1ZW23X1323158WZA89',
                status: 'shipped'
            }

            // needs to return state object with just the specific item's stock changed
            const newInventoryArray = state.inventory.map(item => {
                // if the item id matches the item ID we are trying to edit
                console.log(item.id);
                if (item.id === parseInt(action.payload.itemID)) {
                    console.log('if block is running')
                    return {
                        // the whole item
                        ...item,
                        // with the stock changed
                        stock: [item.stock] - action.payload.purchaseQty
                    }
                } else {
                    // just return the item object as is
                    return {
                        ...item
                    }
                }
            })
            return {
                // copy everything in state
                ...state,
                // create new inventory array
                inventory: newInventoryArray,
                tracking: [...state.tracking, trackingObject]

            }
        default: 
            return state;
    }
}

