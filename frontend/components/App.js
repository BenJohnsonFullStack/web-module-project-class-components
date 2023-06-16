import React from 'react'
import TodoList from './TodoList'
import Form from './Form'

export default class App extends React.Component {
  
  constructor() {
    super()
    this.state = {
      todos:  [
        {
          name: 'Organize Garage',
          id: 1528817077286, // could look different, you could use a timestamp to generate it
          completed: false
        },
        {
          name: 'Bake Cookies',
          id: 1528817084358,
          completed: false
        }
      ]
    }
  }

  handleAdd = (name) => {

    const newTodo = {
      name: name,
      id: Date.now(),
      completed: false
    }

    this.setState({
      ...this.state,
      todos: [...this.state.todos, newTodo]
    })
  }

  handleClear = () => {
    this.setState({
      ...this.state,
      todos: this.state.todos.filter(todo => {
        return (todo.completed === false)
      })
    })
  }

  handleToggle = (e) => {
    this.setState({
      ...this.state,
      todos: this.state.todos.map(todo => {
        if(todo.id === id) {
          return ({
            ...todo,
            completed: !completed
          })
        } else return todo
      })
    })
  }

  render() {
    const { todos } = this.state

    return (
      <div>
        <h1>ToDo List</h1>
        <TodoList todos={todos} id={id} toggle={this.handleToggle}/>
        <Form add={this.handleAdd}/>
        <button onClick={this.handleClear}>Clear</button>
      </div>
    )
  }
}
