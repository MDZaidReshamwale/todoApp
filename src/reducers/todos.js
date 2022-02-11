const todos = (state = [], action) => {
  switch (action.type) {
    case 'ADD_TODO':
      return [
        ...state,
        {
          id: action.id,
          text: action.text,
          completed: false
        }
      ]
      // case to delete a todo
      case 'DELETE_ALL':
        console.log('input state:'+JSON.stringify(state));
        return [];


    case 'TOGGLE_TODO':
      return state.map(todo =>
        (todo.id === action.id)
          ? {...todo, completed: !todo.completed}
          : todo
      )

  case 'DELETE_TODO':
    console.log("DELETE_TODO");
    const newState = state.filter((item) => { return item.id !== action.id });
    return newState;


    // return state.filter(todo =>
    //   todo.id !== action.id
    // )
    //  // return {...state, todos: state.filter(todo => todo.id !== action.id)};
        

    default:
      return state
  }
}

export default todos
