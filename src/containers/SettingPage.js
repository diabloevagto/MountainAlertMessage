import { connect } from 'react-redux'

import { setContact, setMessageContent, updateMessageContent } from '../actions'
import SettingPage from '../components/SettingPage'

const mapStateToProps = state => ({
  contact: state.contact,
  messageContent: state.messageContent,
})

const mapDispatchToProps = dispatch => ({
  setContact: (contact) => dispatch(setContact(contact)),
  setMessageContent: (content) => dispatch(setMessageContent(content)),
  updateMessageContent: (content) => dispatch(updateMessageContent(content)),
})

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(SettingPage)
