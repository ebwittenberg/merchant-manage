import React from 'react';

function Shipment({details}) {

    return (
        <tr>
            <td>{details.itemID}</td>
            <td>{details.purchaseQty}</td>
            <td>{details.trackingNum}</td>
            <td>{details.status}</td>
        </tr>
    )


}


export default Shipment;