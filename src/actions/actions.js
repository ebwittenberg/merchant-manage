export function reduceStock(itemID, purchaseQty) {
    // needs to return an object with a type and payload
    return {
        type: 'ACTION_ADJUST_STOCK',
        payload: {
            itemID,
            purchaseQty
        }
    }
}