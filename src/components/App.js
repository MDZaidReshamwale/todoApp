import React from 'react'
import Footer from './Footer'
import AddTodo from '../containers/AddTodo'
import VisibleTodoList from '../containers/VisibleTodoList'
import  '../style/style.css'


const App = () => (
  <div>
   <h1 style={{ textDecoration: "underline" }}> Todos App</h1>
    <AddTodo />
    <VisibleTodoList />
    <Footer />
  </div>
)

export default App
