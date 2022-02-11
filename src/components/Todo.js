import React from 'react'
import PropTypes from 'prop-types'
import todos from '../reducers/todos'
import { connect } from 'react-redux'
import { deleteTodo } from '../actions'


const Todo = ({ onClick, completed, text, onDelete  }) => (
  
  <li
    onClick={onClick}
    style={{
      textDecoration: completed ? 'line-through' : 'none'
    }}
  >
   <span onClick={onClick} >{text}</span> &nbsp;&nbsp;
    <button onClick={()=>{onDelete()}}>X</button>

  </li>
)

Todo.propTypes = {
  onClick: PropTypes.func.isRequired, 
  completed: PropTypes.bool.isRequired,
  text: PropTypes.string.isRequired,
  onDelete : PropTypes.func.isRequired

}



export default connect() (Todo);
