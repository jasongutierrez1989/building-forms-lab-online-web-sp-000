// Add BandInput component
import React, { Component } from 'react'

class BandInput extends Component {
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
