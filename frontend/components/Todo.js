import React from 'react'

export default class Todo extends React.Component {

  handleClick = () => {
    this.props.toggle(this.props.todo.id)
  }

  render() {
    return (
      <li onClick={handleClick}>
        { this.props.todo.name } 
        { this.props.todo.completed 
          ? <span>- completed</span> 
          : <span></span> 
        }
      </li>
    )
  }
}
