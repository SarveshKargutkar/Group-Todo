// import todoLIst from "../Component/todoLIst";

const group = (state = [], action) => {
  // console.log("h1")
  switch (action.type) {
    case 'ADD_GROUP_NAME':

      return [
        ...state,
        {
          groupName: action.value,
          todos: []

        }
      ]
    case 'ADD_TODO':
      return state.map(group => {
        if (action.groupName !== group.groupName  )
          return group

        return Object.assign({}, group, { todos: [...group.todos, { completed: false, text: action.text }] })
      })
    case 'handleCheck':
      return state.map(group => {
        if (action.groupName !== group.groupName)
          return group

        return Object.assign({}, group, {
          todos: group.todos.map(todo => {
            if (action.text === todo.text)
              return Object.assign({}, todo, { completed: !todo.completed })
            return todo
          }
          )
        })
      })
    case 'DELETE_TODO':
      return state.map(group => {
        if (action.groupName !== group.groupName)
          return group

        return Object.assign({}, group, {
          todos: group.todos.filter(todo => todo.text !== action.text)
        })
      })
    default:
      return state

  }
}
export default group