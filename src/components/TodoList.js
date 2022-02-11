import React from 'react'
import PropTypes from 'prop-types'
import Todo from './Todo'


const TodoList = ({ todos, toggleTodo, deleteTodo }) => (
  <div
   style={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        border: "1px solid #ffffffa6",
        padding: "5px",
        cursor: "pointer"
      }}>
  <ul>
    {todos.map(todo =>
      <Todo
        key={todo.id}
        
        {...todo}
        onClick={() => toggleTodo(todo.id)} 
        onDelete={() => deleteTodo(todo.id)}
         />

         
    )}
  </ul>
  </div>
)

TodoList.propTypes = {
  todos: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    completed: PropTypes.bool.isRequired,
    text: PropTypes.string.isRequired
  }).isRequired).isRequired,
  toggleTodo: PropTypes.func.isRequired,
  deleteTodo: PropTypes.func.isRequired
}

export default TodoList
