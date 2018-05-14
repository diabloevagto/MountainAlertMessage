import { connect } from 'react-redux'

import { getContact, getMessageContent } from './actions'
import App from './App'

const mapStateToProps = state => ({
})

const mapDispatchToProps = dispatch => ({
  getContact: () => dispatch(getContact()),
  getMessageContent: () => dispatch(getMessageContent()),
})

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(App)
