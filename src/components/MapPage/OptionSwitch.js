import React, { Component } from 'react'
import {
  Switch,
  View,
  Text,
  Button,
  ScrollView,
  StyleSheet,
} from 'react-native';
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps';
import Communications from 'react-native-communications';

export default class OptionSwitch extends Component {
  constructor(props) {
    super(props);
  }

  OptionSwitch(item) {
    const { key, text, enable, deleted } = item
    if (deleted === true) return

    const styles = StyleSheet.create({
      flexView: {
        marginTop: 5,
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'flex-start',
      },
      text: {
        marginLeft: 10,
        color: 'red',
        fontSize: 25,
      },
    });

    return (
      <View style={styles.flexView} key={key}>
        <Switch
          onValueChange={(enable) => this.props.updateMessageContent({ ...item, enable })}
          value={enable}
        />
        <Text style={styles.text}> {text} </Text>
      </View>
    )
  }

  render() {
    return (
      <View style={[styles.flexItem, { height: '40%' }]}>
        <ScrollView
        >
          {this.props.messageContent.map(item => this.OptionSwitch(item))}
        </ScrollView>
      </View>
    );
  }
}


const styles = StyleSheet.create({
  flexView: {
    margin: 10,
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  flexItem: {
    flexGrow: 1,
  },
});

