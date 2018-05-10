import React, { Component } from 'react';
import {
  View,
  StyleSheet,
} from 'react-native';

import Footer from './containers/Footer'

class App extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.getTodos()
  }

  render() {
    return (
      <View
        style={styles.view}
      >
        <Footer />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  view: {
    marginTop: 100,
    marginLeft: 10,
  },
});

export default App
