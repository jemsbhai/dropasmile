import React, { Component } from 'react'
import { Image, StyleSheet } from 'react-native'
import MapView, { Marker } from 'react-native-maps'
export default class App extends Component {
  render() {
    return (
      <MapView
        style={{ ...StyleSheet.absoluteFillObject }}
        initialRegion={{
          latitude: 25.7664362,
          longitude: -80.1915964,
          latitudeDelta: .005,
          longitudeDelta: .005
        }} >
        <Marker
          coordinate={{ latitude: 25.7664362, longitude: -80.1915964 }}
          title='Brickell City Centre'
          description='Help someone in need'
        >
          <Image source={require('./sad_marker.png')} style={{height: 35, width:35 }} />
        </Marker >
      </MapView>
    );
  }
}