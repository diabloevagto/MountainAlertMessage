import { connect } from 'react-redux'

import { addTodo } from '../actions'
import Footer from '../components/Footer'

const mapStateToProps = state => ({
  todos: state.todos,
})

const mapDispatchToProps = dispatch => ({
  addTodo: text => dispatch(addTodo(text))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Footer)
