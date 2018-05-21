import React, { Component } from 'react'
import {
  Switch,
  View,
  Text,
  Button,
  ScrollView,
  StyleSheet,
} from 'react-native';
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps';
import Communications from 'react-native-communications';

import contactType, { initialState } from '../constants/contactType';
import LocationInfo from '../containers/MapPage/LocationInfo'
import OptionSwitch from '../containers/MapPage/OptionSwitch'

export default class MapPage extends Component {
  constructor(props) {
    super(props);

    navigator.geolocation.watchPosition(
      (pos) => this.props.setPosition(pos.coords),
      (err) => console.log(err),
      {
        enableHighAccuracy: true,
        timeout: 1000,
        maximumAge: 0
      });
  }

  SMSmessage() {
    const coords = () => `緯度：${this.props.position.latitude}, 經度：${this.props.position.longitude}`
    const message = () => this.props.messageContent.map(item => {
      return (item.deleted === false && item.enable === true) ? item.text : ''
    })
      .filter((st) => st != '')
      .join(',')

    const name = this.props.contact[contactType.MYSELF].name
    return `我是${name}，目前座標為${coords()}，附註：${message()}`
  }

  render() {
    const position = this.props.position
    return (
      < View style={styles.view} >
        <Text>{this.SMSmessage()}</Text>
        <MapView
          showsUserLocation
          style={styles.map}
          provider={PROVIDER_GOOGLE}
          region={position}
        >
        </MapView>
        <View style={styles.flexView}>
          <LocationInfo SMSmessage={this.SMSmessage()} />
          <OptionSwitch />
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
});

