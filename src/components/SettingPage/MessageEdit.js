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
              <View
                style={styles.flexView}
                key={item.key}
              >
                {item.deleted && <Button
                  title="X"
                  onPress={() => {
                    this.props.deleteMessageContent({ key: item.key })
                  }}
                />}
                <Text
                  style={[styles.text, { textDecorationLine: item.deleted ? 'line-through' : 'none' }]}
                  onPress={() => {
                    this.props.updateMessageContent({ ...item, deleted: !item.deleted })
                  }}
                >{item.text}</Text>
              </View>
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
    justifyContent: 'flex-start',
  },
});
