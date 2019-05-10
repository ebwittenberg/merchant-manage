import { connect } from 'react-redux';
import InventoryDashboard from '../components/InventoryDashboard';
import { reduceStock } from '../actions/actions';


// need a mapStateToProps function
// takes in current state
function mapStateToProps(state) {
    return {
        inventory: state
    }
}

function mapDispatchToProps(dispatch) {
    // needs to return a function that 
    return {
        handleSubmit: (itemID, purchaseQty) => {
            dispatch(reduceStock(itemID, purchaseQty))
        }
    }

}

export default connect(mapStateToProps, mapDispatchToProps)(InventoryDashboard)