import React from 'react';
import { store } from '../store';
import Item from './Item';
import AddPo from './AddPo';

// inventoryDashboard needs to track value of item the PO is for and stock value
class InventoryDashboard extends React.Component {

    constructor(props) {
        super(props);
        this.state={
            itemOnPO: '1001',
            purchaseQty: 0
        }
    }

    render() {
        const state = store.getState();
        return (
            <div>
                <h2>Inventory Dashboard</h2>
    
                <AddPo 
                    onStockChange={this._changePurchaseQty}
                    onItemChange={this._changeItemOnPO}
                    inputValue={this.state.purchaseQty}
                    handleFormSubmit={this._onPOSubmit}
                />
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
        this.props.handleSubmit(this.state.itemOnPO, this.state.purchaseQty)

    }
}

export default InventoryDashboard