// Add BandInput component
import React, { Component } from 'react'

class BandInput extends Component {

  constructor(props){
    super(props)
    this.state = {
      name: ""
    }
  }

  handleChange = (e) => {
    this.setState({
      name: e.target.value
    })
  }

  handleSubmit = (e) => {
    e.preventDefault()
    this.setState({
      name: ""
    })
  }

  render() {
    return(
      <div>
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            name="name"
            onChange={this.handleChange}
            value={this.state.name}
          />
          <input
            type="submit"
          />
        </form>
      </div>
    )
  }
}

export default BandInput
