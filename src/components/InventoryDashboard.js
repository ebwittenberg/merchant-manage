import React from 'react';
import { store } from '../store';
import Item from './Item';
import AddPo from './AddPo';
import TrackingList from '../containers/TrackingListContainer';

// inventoryDashboard needs to track value of item the PO is for and stock value
class InventoryDashboard extends React.Component {

    constructor(props) {
        super(props);
        this.state={
            itemOnPO: 'Item ID',
            purchaseQty: ''
        }
    }

    render() {
        const state = store.getState();
        console.log(state);
        console.log(state.tracking);
        return (
            <div>
                <h2 style={{textAlign: 'center'}}>Inventory Dashboard</h2>
                <h3 style={{textAlign: 'right', marginRight: '20px'}}>Your Ware2Go warehouse ID: {state.inventory[0].warehouseID}</h3>
                <h3>Add New Purchase Order</h3>
                <AddPo 
                    onStockChange={this._changePurchaseQty}
                    onItemChange={this._changeItemOnPO}
                    selectedItem={this.state.itemOnPO}
                    inputValue={this.state.purchaseQty}
                    handleFormSubmit={this._onPOSubmit}
                />
                <table className="inventory-table">
                    <tbody>
                        <tr>
                            <th>Item ID</th>
                            <th>Name</th>
                            <th>Stock</th>
                        </tr>
    
    
                        {
                            state.inventory.map((i, index) => <Item key={index} details={i} />)
                        }
                    </tbody>
                </table>
                {
                    state.tracking.length ? <TrackingList /> : null
                }

            </div>
        )
    }

    _changePurchaseQty = (purchaseQty) => {
        this.setState({
            purchaseQty
        })

    }

    _changeItemOnPO = (itemOnPO) => {
        this.setState({
            itemOnPO
        })
    }

    _onPOSubmit = () => {
        console.log(this.state.itemOnPO);
        console.log(this.state.purchaseQty);
        // needs to dispatch an action to the reducer
        this.props.handleSubmit(this.state.itemOnPO, this.state.purchaseQty);
        this.setState({
            itemOnPO: 'Item ID',
            purchaseQty: ''
        })

    }
}

export default InventoryDashboard