import { connect } from 'react-redux'

import { setContact, setPosition, updateMessageContent } from '../actions'
import MapPage from '../components/MapPage'

const mapStateToProps = state => ({
  contact: state.contact,
  position: state.position,
  messageContent: state.messageContent,
})

const mapDispatchToProps = dispatch => ({
  setPosition: (position) => dispatch(setPosition(position)),
  updateMessageContent: (content) => dispatch(updateMessageContent(content)),
})

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(MapPage)
