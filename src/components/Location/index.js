import React, { Component, useState } from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import Slider from '@material-ui/lab/Slider'
import './styles.css'

const styles = {
  root: {
    width: 300
  },
  slider: {
    padding: '22px 0px',
    margin: '15px'
  }
}

class Location extends Component {
  state = {
    value: 5
  }

  handleChange = (event, value) => {
    this.setState({ value })
  }

  render() {
    const { classes } = this.props
    const { value } = this.state

    return (
      <div className={classes.root}>
        <button className="location">Bristol City Center</button>
        <Slider
          className={classes.slider}
          value={value}
          min={0}
          max={6}
          step={1}
          onChange={this.handleChange}
        />
      </div>
    )
  }
}
export default withStyles(styles)(Location)
