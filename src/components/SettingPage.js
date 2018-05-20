import React, { Component } from 'react'
import {
  View,
  Text,
  TextInput,
  Button,
  StyleSheet,
  ScrollView,
} from 'react-native';

import contactType, { initialState } from '../constants/contactType';

export default class SettingPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      TmpMessage: '',
    }
  }

  setContact(type, obj) {
    const newObj = Object.assign({}, this.props.contact[type], obj)
    this.props.setContact(Object.assign({}, this.props.contact, { [type]: newObj }))
  }

  contactInput() {
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

    return (
      <View>
        <Text style={styles.title}>你的資料</Text>
        <TextInput
          style={styles.textInput}
          placeholder="輸入你的姓名"
          defaultValue={this.props.contact[contactType.MYSELF].name}
          // onChangeText={(text) => this.setContact(contactType.MYSELF, { name: text })}
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
          // onChangeText={(text) => this.setContact(contactType.FIRST, { name: text })}
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
    )
  }

  messageEdit() {
    const styles = StyleSheet.create({
      textInput: {
        height: 40,
        fontSize: 30,
      },
      text: {
        fontSize: 25,
      },
    });

    return (
      <View style={{ marginTop: 40, }}>
        <View >
          <TextInput
            style={styles.textInput}
            placeholder="新增附註"
            defaultValue={this.state.TmpMessage}
            // onChangeText={(text) => this.setState({ TmpMessage: text })}
            onEndEditing={(e) => this.setState({ TmpMessage: e.nativeEvent.text })} />
          />
          <Button
            title="ADD"
            disabled={this.state.TmpMessage === ''}
            onPress={() => {
              this.props.setMessageContent({ key: new Date().getTime(), text: this.state.TmpMessage, enable: false, deleted: false })
              this.setState({ TmpMessage: '' })
            }}
          />
        </View>
        <View style={{ height: '45%' }}>
          <ScrollView
          >
            {this.props.messageContent.map(item => (
              <Text
                key={item.key}
                style={[styles.text, { textDecorationLine: item.deleted ? 'line-through' : 'none' }]}
                onPress={() => {
                  this.props.updateMessageContent({ ...item, deleted: !item.deleted })
                }}
              >{item.text}</Text>
            ))}
          </ScrollView>
        </View>

      </View>
    )
  }

  render() {
    return (
      <View style={{ marginLeft: '20%' }}>
        {this.contactInput()}
        {this.messageEdit()}
      </View>
    );
  }
}



