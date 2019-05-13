import React from 'react';
import Shipment from './Shipment';

// job of tracking list is to display all POs that are currently being processed/shipped
// will get an array of just the tracking objects from state
function TrackingList({shipments}) {

    return (
        <div>
            <h3>Current Shipments</h3>

            <table style={{marginBottom: '100px'}}>
                <tbody>
                    <tr>
                        <th>Item ID</th>
                        <th>Purchase QTY</th>
                        <th>Tracking Number</th>
                        <th>Status</th>
                    </tr>

                    {
                        shipments.map((trackingObject, index) => <Shipment key={index} details={trackingObject}/>)
                    }
                </tbody>
            </table>


        </div>
    )

}


export default TrackingList