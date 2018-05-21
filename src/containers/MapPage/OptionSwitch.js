import { connect } from 'react-redux'

import { setContact, setPosition, updateMessageContent } from '../../actions'
import OptionSwitch from '../../components/MapPage/OptionSwitch'

const mapStateToProps = state => ({
  messageContent: state.messageContent,
})

const mapDispatchToProps = dispatch => ({
  updateMessageContent: (content) => dispatch(updateMessageContent(content)),
})

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(OptionSwitch)
