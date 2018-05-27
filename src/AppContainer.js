import { connect } from 'react-redux'

import { initApp } from './actions'
import App from './App'

const mapStateToProps = state => ({
  page: state.pages.page,
})

const mapDispatchToProps = dispatch => ({
  initApp: () => dispatch(initApp()),
})

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(App)
