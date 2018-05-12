import React, { Component } from 'react'
import {
  View,
  TextInput,
  Button,
  StyleSheet,
} from 'react-native';

import contactType from '../constants/contactType';

export default class SettingPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      [contactType.MYSELF]: {
        name: '1',
        phone: '2'
      },
      [contactType.FIRST]: {
        name: '3',
        phone: '4'
      },
    };
  }

  setContact(type, obj) {
    const newObj = Object.assign({}, this.state[type], obj)
    this.setState(Object.assign({}, this.state, { [type]: newObj }))
  }

  render() {
    return (
      <View>
        <TextInput
          style={styles.textInput}
          placeholder="輸入你的姓名"
          onChangeText={(text) => this.setContact(contactType.MYSELF, { name: text })}
        />
        <TextInput
          style={styles.textInput}
          placeholder="輸入你的電話"
          onChangeText={(text) => this.setContact(contactType.MYSELF, { phone: text })}
        />
        <TextInput
          style={styles.textInput}
          placeholder="輸入第一聯絡人的姓名"
          onChangeText={(text) => this.setContact(contactType.FIRST, { name: text })}
        />
        <TextInput
          style={styles.textInput}
          placeholder="輸入第一聯絡人的電話"
          onChangeText={(text) => this.setContact(contactType.FIRST, { phone: text })}
        />

        <Button
          title="設定"
          onPress={() => { this.props.setContact(this.state) }}
        />
      </View>
    );
  }
}


const styles = StyleSheet.create({
  textInput: {
    height: 40
  },
});
