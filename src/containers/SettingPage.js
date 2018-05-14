import { connect } from 'react-redux'

import { setContact, setMessageContent } from '../actions'
import SettingPage from '../components/SettingPage'

const mapStateToProps = state => ({
  contact: state.contact,
})

const mapDispatchToProps = dispatch => ({
  setContact: (contact) => dispatch(setContact(contact)),
  setMessageContent: (content) => dispatch(setMessageContent(content)),
})

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(SettingPage)
