import React from 'react';

function Item({details}) {
    return (
        <tr>
            <td>{details.id}</td>
            <td>{details.name}</td>
            <td>{details.stock}</td>
        </tr>

    )
}

export default Item;