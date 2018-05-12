import { connect } from 'react-redux'

import { getContact } from './actions'
import App from './App'

const mapStateToProps = state => ({
})

const mapDispatchToProps = dispatch => ({
  getContact: () => dispatch(getContact())
})

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(App)
