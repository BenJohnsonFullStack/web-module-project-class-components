import React from 'react'

export default class Form extends React.Component {

  constructor() {
    super();
    this.state = {
      input: ""
    }
  }

  handleSubmit = (e) => {
    e.preventDefault()
    this.props.add(this.state.input)
    this.state.input = ""
  }

  handleChange = (e) => {
    this.setState({
      ...this.state,
      input: e.target.value
    })
  }

  render() {
    return (
      <form onClick={this.handleSubmit}>
        <input onChange={handleChange}/>
        <button>Add</button>
      </form>
    )
  }
}
