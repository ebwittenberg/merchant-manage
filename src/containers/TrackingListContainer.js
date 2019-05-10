import { connect } from 'react-redux';
import TrackingList from '../components/TrackingList'

// mapstatetoprops

// needs to pass TrackingList just the tracking array (only thing it cares about)
function mapStateToProps(state) {
    return {
        shipments: state.tracking
    }
}

export default connect(mapStateToProps)(TrackingList)