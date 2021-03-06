import React, { Component } from 'react';
import {
  Dimensions,
} from 'react-native';

import {
  TabViewAnimated,
  TabBar,
  SceneMap,
} from 'react-native-tab-view';

import SettingPage from './containers/SettingPage'
import MapPage from './containers/MapPage'

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      index: this.props.page,
      routes: [
        { key: 'SettingPage', title: '設定頁' },
        { key: 'MapPage', title: '訊息頁' },
      ],
    };
  }

  componentDidMount() {
    this.props.initApp()
  }

  componentWillReceiveProps({ page }) {
    this.setState({ index: page })
  }

  _handleIndexChange = index => this.setState({ index });

  _renderHeader = props => <TabBar {...props} />;

  _renderScene = SceneMap({
    SettingPage: () => (<SettingPage />),
    MapPage: () => (<MapPage />),
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

export default App
