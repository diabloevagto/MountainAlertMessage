import React, { Component } from 'react'
import {
  View,
} from 'react-native';

import ContactInput from './SettingPage/ContactInput';
import MessageEdit from './SettingPage/MessageEdit';

export default class SettingPage extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <View style={{ marginLeft: '20%' }}>
        <ContactInput
          contact={this.props.contact}
          setContact={this.props.setContact}
        />
        <MessageEdit
          messageContent={this.props.messageContent}
          setMessageContent={this.props.setMessageContent}
        />

      </View>
    );
  }
}



