import { connect } from 'react-redux'

import { setContact, setPosition, updateMessageContent } from '../actions'
import SettingPage from '../components/SettingPage'

const mapStateToProps = state => ({
  editContact: state.pages.editContact,
})

const mapDispatchToProps = dispatch => ({
})

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(SettingPage)
