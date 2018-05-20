import React, { Component } from 'react'
import {
  View,
  Text,
  TextInput,
  Button,
  StyleSheet,
  ScrollView,
} from 'react-native';

export default class MessageEdit extends Component {
  constructor(props) {
    super(props);

    this.state = {
      TmpMessage: '',
    }
  }

  render() {
    return (
      <View style={{ marginTop: 40, }}>
        <View >
          <TextInput
            style={styles.textInput}
            placeholder="新增附註"
            defaultValue={this.state.TmpMessage}
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
    );
  }
}

const styles = StyleSheet.create({
  textInput: {
    height: 40,
    fontSize: 30,
  },
  text: {
    fontSize: 25,
  },
});
