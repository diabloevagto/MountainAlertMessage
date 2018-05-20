import React, { Component } from 'react'
import {
  View,
  Text,
  TextInput,
  StyleSheet,
} from 'react-native';

import contactType, { initialState } from '../../constants/contactType';

export default class ContactInput extends Component {
  constructor(props) {
    super(props);
  }

  setContact(type, obj) {
    const newObj = Object.assign({}, this.props.contact[type], obj)
    this.props.setContact(Object.assign({}, this.props.contact, { [type]: newObj }))
  }

  render() {
    return (
      <View>
        <Text style={styles.title}>你的資料</Text>
        <TextInput
          style={styles.textInput}
          placeholder="輸入你的姓名"
          defaultValue={this.props.contact[contactType.MYSELF].name}
          onEndEditing={(e) => this.setContact(contactType.MYSELF, { name: e.nativeEvent.text })}
        />
        <TextInput
          style={styles.textInput}
          keyboardType={'numeric'}
          placeholder="輸入你的電話"
          defaultValue={this.props.contact[contactType.MYSELF].phone}
          onChangeText={(text) => this.setContact(contactType.MYSELF, { phone: text })}
        />
        <Text style={styles.title}>聯絡人資料</Text>
        <TextInput
          style={styles.textInput}
          placeholder="輸入第一聯絡人的姓名"
          defaultValue={this.props.contact[contactType.FIRST].name}
          onEndEditing={(e) => this.setContact(contactType.FIRST, { name: e.nativeEvent.text })}
        />
        <TextInput
          style={styles.textInput}
          keyboardType={'numeric'}
          placeholder="輸入第一聯絡人的電話"
          defaultValue={this.props.contact[contactType.FIRST].phone}
          onChangeText={(text) => this.setContact(contactType.FIRST, { phone: text })}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  textInput: {
    height: 40,
    fontSize: 30,
  },
  title: {
    marginTop: 40,
    color: 'blue',
    fontWeight: 'bold',
    fontSize: 40,
  },
});
