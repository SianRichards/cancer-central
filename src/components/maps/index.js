import React, { Component } from 'react'
import { Map, GoogleApiWrapper } from 'google-maps-react'

const mapStyles = {
  width: '100%',
  height: '100%'
}

class MapContainer extends Component {
  render() {
    return (
      <Map
        google={this.props.google}
        zoom={6}
        style={mapStyles}
        initialCenter={{
          lat: 55.377,
          lng: -3.426
        }}
      />
    )
  }
}

export default GoogleApiWrapper({
  apiKey: 'AIzaSyCsizw7ZJWqKNRoUTq7EUnedEVA-qkKBUQ'
})(MapContainer)
