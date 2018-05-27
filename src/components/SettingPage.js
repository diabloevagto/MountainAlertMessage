import React, { Component } from 'react'
import {
  View,
  Button,
} from 'react-native';

import ContactInput from '../containers/SettingPage/ContactInput';
import MessageEdit from '../containers/SettingPage/MessageEdit';

export default class SettingPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      editContact: this.props.editContact,
    }
  }

  componentWillReceiveProps({ editContact }) {
    console.log(editContact)
    this.setState({ editContact })
  }

  render() {
    return (
      <View>
        <Button
          title={'切換'}
          onPress={() => this.setState({ editContact: !this.state.editContact })}
        />
        <View style={{ marginLeft: '20%', marginTop: 20 }}>
          {this.state.editContact === true && <ContactInput />}
          {this.state.editContact === false && <MessageEdit />}
        </View>
      </View>
    )
  }
}



