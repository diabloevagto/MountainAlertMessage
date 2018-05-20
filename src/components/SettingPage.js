import React, { Component } from 'react'
import {
  View,
} from 'react-native';

import ContactInput from '../containers/SettingPage/ContactInput';
import MessageEdit from '../containers/SettingPage/MessageEdit';

export default class SettingPage extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <View style={{ marginLeft: '20%' }}>
        <ContactInput />
        <MessageEdit />
      </View>
    );
  }
}



