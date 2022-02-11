import React from 'react'
import { connect } from 'react-redux'
import { addTodo, deleteAll, deleteTodo  } from '../actions'

const AddTodo = ({ dispatch }) => {
  let input

  return (
    <div>
      <form onSubmit={e => {
        e.preventDefault()
        if (!input.value.trim()) {
          return
        }
        dispatch(addTodo(input.value))
        input.value = ''

        // dispatch(deleteTodo(id))
        
        
      }}>
        <input ref={node => input = node} />
        <button type="submit">
          Add Todo
        </button> &nbsp;
        <button onClick={e => {
            dispatch(deleteAll());
          }}>
          Delete All 
        </button>
      </form>
    </div>
  )
}

export default connect()(AddTodo)
