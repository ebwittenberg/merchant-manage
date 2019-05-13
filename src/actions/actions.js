export function reduceStock(itemID, purchaseQty) {
    // needs to return an object with a type and payload
    const randomNum = Math.floor(Math.random() * 99);
    const numToString = randomNum.toString()
    return {
        type: 'ACTION_ADJUST_STOCK',
        payload: {
            itemID,
            purchaseQty,
            status: 'shipped',
            trackingNum: `1ZW23X1323158WZA${numToString}`
        }
    }
}