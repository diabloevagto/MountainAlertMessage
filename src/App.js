import React, { Component } from 'react';
import {
  View,
  StyleSheet,
  Dimensions,
} from 'react-native';

import {
  TabViewAnimated,
  TabBar,
  SceneMap,
} from 'react-native-tab-view';

import SettingPage from './containers/SettingPage'


const FirstRoute = () => (<View
  style={styles.view}
>
  <SettingPage />
</View>);
const SecondRoute = () => <View style={[styles.container, { backgroundColor: '#000000' }]} />;

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      index: 0,
      routes: [
        { key: 'first', title: 'First__T' },
        { key: 'second', title: 'Second__T' },
      ],
    };
  }

  componentDidMount() {
    this.props.getContact()
  }

  _handleIndexChange = index => this.setState({ index });

  _renderHeader = props => <TabBar {...props} />;

  _renderScene = SceneMap({
    first: FirstRoute,
    second: SecondRoute,
  });

  render() {
    return (
      <TabViewAnimated
        navigationState={this.state}
        renderScene={this._renderScene}
        renderHeader={this._renderHeader}
        onIndexChange={this._handleIndexChange}
      />
    );
  }
}

const styles = StyleSheet.create({
  view: {
    marginTop: 100,
    marginLeft: 10,
  },
  container: {
    flex: 1,
  },
});

export default App
