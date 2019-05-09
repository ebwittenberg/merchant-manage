import { connect } from 'react-redux';
import InventoryDashboard from '../components/InventoryDashboard';


// need a mapStateToProps function
// takes in current state
function mapStateToProps(state) {
    return {
        inventory: state
    }
}

export default connect(mapStateToProps)(InventoryDashboard)