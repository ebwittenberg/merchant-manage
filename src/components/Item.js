import React from 'react';

function Item({details}) {
    return (
        <tr>
            <td>{details.id}</td>
            <td>{details.name}</td>
            <td>{details.stock}</td>
            <td>{details.warehouseID}</td>
        </tr>

    )
}

export default Item;