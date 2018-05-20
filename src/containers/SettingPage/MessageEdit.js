import { connect } from 'react-redux'

import { setMessageContent, updateMessageContent, deleteMessageContent } from '../../actions'
import MessageEdit from '../../components/SettingPage/MessageEdit'

const mapStateToProps = state => ({
  messageContent: state.messageContent,
})

const mapDispatchToProps = dispatch => ({
  setMessageContent: (content) => dispatch(setMessageContent(content)),
  updateMessageContent: (content) => dispatch(updateMessageContent(content)),
  deleteMessageContent: (content) => dispatch(deleteMessageContent(content)),
})

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(MessageEdit)
