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

    this.state = { date: new Date() };

    navigator.geolocation.watchPosition(
      (pos) => this.props.setPosition(pos.coords),
      (err) => console.log(err),
      {
        enableHighAccuracy: true,
        timeout: 1000,
        maximumAge: 0
      });
  }

  componentDidMount() {
    this.timerID = setInterval(
      () => {
        this.setState({
          date: new Date()
        });
      },
      1000
    );
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  SMSmessage() {
    const coords = () => `WGS84: ${this.props.position.latitude}, ${this.props.position.longitude}(誤差 ${this.props.position.accuracy.toFixed(0)}m)`
    const currentTime = () => {
      const time = new Date()
      return `發送時間: ${this.state.date.toLocaleString()}`
    }
    const message = () => this.props.messageContent.map(item => {
      return (item.deleted === false && item.enable === true) ? item.text : ''
    })
      .filter((st) => st != '')
      .join(',')

    const name = this.props.contact[contactType.MYSELF].name
    return `我是${name}，${coords()}，${currentTime()}，附註：${message()}`
  }

  render() {
    const position = this.props.position
    return (
      < View style={styles.view} >
        <Text style={styles.text} >{this.SMSmessage()}</Text>
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
  text: {
    fontSize: 18,
  },
});

