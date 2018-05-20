import { connect } from 'react-redux'

import { setContact, setMessageContent, updateMessageContent } from '../../actions'
import MessageEdit from '../../components/SettingPage/MessageEdit'

const mapStateToProps = state => ({
  messageContent: state.messageContent,
})

const mapDispatchToProps = dispatch => ({
  setMessageContent: (content) => dispatch(setMessageContent(content)),
  updateMessageContent: (content) => dispatch(updateMessageContent(content)),
})

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(MessageEdit)
