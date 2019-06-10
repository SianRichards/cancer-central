import React, { Component } from 'react'
import './styles.css'
import GoogleApiWrapper from '../maps'
import Location from '../Location'
class Home extends Component {
  state = {
    displayMap: false
  }

  render() {
    let { displayMap } = this.state
    return (
      <div className="home-container">
        <div className="search-container">
          <h4>Search Builder</h4>
          <Location />
        </div>
        <div className="main-container">
          {this.state.displayMap === true ? (
            <GoogleApiWrapper />
          ) : (
            <div>Categories here</div>
          )}
          <button
            className="main-container-switch"
            onClick={() => this.setState({ displayMap: !displayMap })}
          >
            Switch View
          </button>
        </div>
      </div>
    )
  }
}

export default Home
