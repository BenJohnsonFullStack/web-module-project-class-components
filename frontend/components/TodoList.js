import React from 'react'
import Todo from './Todo'

export default class TodoList extends React.Component {
  render() {
    return(
      <ul>
        { 
          this.props.todos.map( todo => {
            return (
            <li>
              <Todo todo={todo} toggle={this.props.handleToggle}/>
            </li>)
          }) 
        }
      </ul>
    ) 
  }
}