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

export default class MapPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      switchValue: true,
      switchValue2: false,
    }

    navigator.geolocation.watchPosition(
      (pos) => this.props.setPosition(pos.coords),
      (err) => console.log(err),
      {
        enableHighAccuracy: true,
        timeout: 1000,
        maximumAge: 0
      });
  }

  OptionSwitch(key, title) {
    const styles = StyleSheet.create({
      flexView: {
        marginTop: 5,
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'flex-start',
      },
      text: {
        marginLeft: 10,
        color: 'red',
        fontSize: 25,
      },
    });

    return (
      <View style={styles.flexView} key={key}>
        <Switch
          onValueChange={(e) => this.setState({ [key]: e })}
          value={this.state[key]}
        />
        <Text style={styles.text}> {title} </Text>
      </View>
    )
  }

  render() {
    const position = this.props.position
    console.log(position)
    return (
      < View style={styles.view} >
        <MapView
          showsUserLocation
          style={styles.map}
          provider={PROVIDER_GOOGLE}
          region={position}
        >
        </MapView>
        <View style={styles.flexView}>
          <View style={styles.flexItem}>
            <Text>精準度：{position.accuracy.toFixed(2)} 公尺</Text>
            <Text>速度：{position.speed.toFixed(2)} 公尺/秒</Text>
            <Text>緯度：{position.latitude.toFixed(4)}</Text>
            <Text>經度：{position.longitude.toFixed(4)}</Text>
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
            <ScrollView
              scrollEnabled={false}
            >
              {[
                { key: 'switchValue', title: 'sw1' },
                { key: 'switchValue2', title: 'sw2' },
              ].map(item => this.OptionSwitch(item.key, item.title))}
            </ScrollView>

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

