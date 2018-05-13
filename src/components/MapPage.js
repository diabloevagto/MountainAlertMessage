import React, { Component } from 'react'
import {
  View,
  Text,
  Button,
  StyleSheet,
} from 'react-native';
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps';
import Communications from 'react-native-communications';


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
        <View style={styles.flexView}>
          <View style={styles.flexItem}>
            <Text>精準度：{this.state.accuracy}</Text>
            <Text>速度：{this.state.speed}</Text>
            <Text>緯度：{this.state.latitude}</Text>
            <Text>經度：{this.state.longitude}</Text>
            <Button
              title={"phone call"}
              onPress={() => Communications.phonecall(this.props.contact[contactType.FIRST].phone, true)}
            />
            <Button
              title={"message"}
              onPress={() => Communications.text(this.props.contact[contactType.FIRST].phone, "安安你好")}
            />
          </View>
          <View style={styles.flexItem}>
            <Text>精準度：{this.state.accuracy}</Text>
            <Text>速度：{this.state.speed}</Text>
            <Text>緯度：{this.state.latitude}</Text>
            <Text>經度：{this.state.longitude}</Text>
          </View>
        </View>
      </View>
    );
  }
}


const styles = StyleSheet.create({
  view: {
    ...StyleSheet.absoluteFillObject,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  map: {
    ...StyleSheet.absoluteFillObject,
    top: '50%',
  },
  flexView: {
    margin: 10,
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  flexItem: {
    flexGrow: 1,
  },
});

