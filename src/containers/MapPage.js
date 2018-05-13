import { connect } from 'react-redux'

import { setContact, setPosition } from '../actions'
import MapPage from '../components/MapPage'

const mapStateToProps = state => ({
  contact: state.contact,
  position: state.position,
})

const mapDispatchToProps = dispatch => ({
  setPosition: (position) => dispatch(setPosition(position))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(MapPage)
