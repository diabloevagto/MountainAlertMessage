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
    return (
      <View>
        <Text style={styles.title}>你的資料</Text>
        <TextInput
          style={styles.textInput}
          placeholder="輸入你的姓名"
          defaultValue={this.props.contact[contactType.MYSELF].name}
          onChangeText={(text) => this.setContact(contactType.MYSELF, { name: text })}
        />
        <TextInput
          style={styles.textInput}
          placeholder="輸入你的電話"
          defaultValue={this.props.contact[contactType.MYSELF].phone}
          onChangeText={(text) => this.setContact(contactType.MYSELF, { phone: text })}
        />
        <Text style={styles.title}>聯絡人資料</Text>
        <TextInput
          style={styles.textInput}
          placeholder="輸入第一聯絡人的姓名"
          defaultValue={this.props.contact[contactType.FIRST].name}
          onChangeText={(text) => this.setContact(contactType.FIRST, { name: text })}
        />
        <TextInput
          style={styles.textInput}
          placeholder="輸入第一聯絡人的電話"
          defaultValue={this.props.contact[contactType.FIRST].phone}
          onChangeText={(text) => this.setContact(contactType.FIRST, { phone: text })}
        />
      </View>
    )
  }

  messageEdit() {
    const styles = StyleSheet.create({
      flexView: {
        // marginTop: 5,
        // flex: 1,
        // flexDirection: 'row',
        // justifyContent: 'flex-start',
      },
    });

    return (
      <View style={{ marginTop: 40, }}>
        <View style={styles.flexView}>
          <TextInput
            placeholder="新增的文字"
            defaultValue={this.state.TmpMessage}
            onChangeText={(text) => this.setState({ TmpMessage: text })}
          />
          <Button
            title="add"
            disabled={this.state.TmpMessage === ''}
            onPress={() => {
              this.props.setMessageContent({ key: new Date().getTime(), text: this.state.TmpMessage, enable: false, deleted: false })
              this.setState({ TmpMessage: '' })
            }}
          />
        </View>
        <ScrollView
        // scrollEnabled={false}
        >
          {this.props.messageContent.map(item => (
            <Text
              key={item.key}
              style={{ textDecorationLine: item.deleted ? 'line-through' : 'none' }}
              onPress={() => {
                this.props.updateMessageContent({ ...item, deleted: !item.deleted })
              }}
            >{item.text}</Text>
          ))}
        </ScrollView>

      </View>
    )
  }

  render() {
    return (
      <View style={styles.view}>
        {this.contactInput()}
        {this.messageEdit()}
      </View>
    );
  }
}


const styles = StyleSheet.create({
  view: {
    marginLeft: '20%'
  },
  textInput: {
    height: 40
  },
  title: {
    marginTop: 40,
    color: 'blue',
    fontWeight: 'bold',
    fontSize: 30,
  },
});

