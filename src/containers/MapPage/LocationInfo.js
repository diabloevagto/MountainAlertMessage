import { connect } from 'react-redux'

import { setContact, setPosition, updateMessageContent } from '../../actions'
import LocationInfo from '../../components/MapPage/LocationInfo'

const mapStateToProps = state => ({
  contact: state.contact,
  position: state.position,
})

const mapDispatchToProps = dispatch => ({
})

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(LocationInfo)
