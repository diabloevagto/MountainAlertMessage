import { connect } from 'react-redux'

import { setContact } from '../actions'
import SettingPage from '../components/SettingPage'

const mapStateToProps = state => ({
  contact: state.contact,
})

const mapDispatchToProps = dispatch => ({
  setContact: (contact) => dispatch(setContact(contact))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(SettingPage)
