import React, { Component } from 'react'
import {
  View,
  Text,
  StyleSheet,
} from 'react-native';
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps';

import contactType, { initialState } from '../constants/contactType';

export default class MapPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      latitude: 23.4693299,
      longitude: 120.9566917,
      latitudeDelta: 0.002,
      longitudeDelta: 0.002,
    }

    navigator.geolocation.watchPosition(
      (pos) => {
        console.log(pos)
        this.setState(pos.coords)
      },
      (err) => console.log(err),
      {
        enableHighAccuracy: true,
        timeout: 1000,
        maximumAge: 0
      });
  }

  render() {
    return (
      <View style={styles.view}>
        <MapView
          showsUserLocation
          style={styles.map}
          provider={PROVIDER_GOOGLE}
          region={this.state}
        >
        </MapView>
        <Text>精準度：{this.state.accuracy}</Text>
        <Text>速度：{this.state.speed}</Text>
        <Text>緯度：{this.state.latitude}</Text>
        <Text>經度：{this.state.longitude}</Text>
      </View>
    );
  }
}


const styles = StyleSheet.create({
  view: {
    ...StyleSheet.absoluteFillObject,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  map: {
    ...StyleSheet.absoluteFillObject,
    height: "50%",

  },
});

