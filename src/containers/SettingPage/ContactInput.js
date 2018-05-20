import { connect } from 'react-redux'

import { setContact } from '../../actions'
import ContactInput from '../../components/SettingPage/ContactInput'

const mapStateToProps = state => ({
  contact: state.contact,
})

const mapDispatchToProps = dispatch => ({
  setContact: (contact) => dispatch(setContact(contact)),
})

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ContactInput)
