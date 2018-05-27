import React, { Component } from 'react'
import {
  Switch,
  View,
  Text,
  Button,
  ScrollView,
  StyleSheet,
  Share,
} from 'react-native';
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps';
import Communications from 'react-native-communications';

import contactType, { initialState } from '../../constants/contactType';

export default class LocationInfo extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const position = this.props.position
    return (
      <View style={styles.flexItem}>
        <Text>精準度：{position.accuracy.toFixed(2)} 公尺</Text>
        <Text>速度：{position.speed.toFixed(2)} 公尺/秒</Text>
        <Text>緯度：{position.latitude.toFixed(4)}</Text>
        <Text>經度：{position.longitude.toFixed(4)}</Text>
        <Button
          title={"打電話"}
          onPress={() => Communications.phonecall(this.props.contact[contactType.FIRST].phone, true)}
        />
        <Button
          title={"傳 SMS 簡訊"}
          onPress={() => Communications.text(this.props.contact[contactType.FIRST].phone, this.props.SMSmessage)}
        />
        <Button
          title={"分享到 app"}
          onPress={() => {
            Share.share(
              {
                message: `${this.props.SMSmessage}。${this.props.GoogleMapLink}`
              }).then(result => console.log(result)).catch(errorMsg => console.log(errorMsg));
          }}
        />
        <Button
          title={"google map link"}
          onPress={() => {
            Share.share(
              {
                message: this.props.GoogleMapLink
              }).then(result => console.log(result)).catch(errorMsg => console.log(errorMsg));
          }}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  flexItem: {
    flexGrow: 1,
  },
});
