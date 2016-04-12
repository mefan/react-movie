/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';

import React, {
  AppRegistry,
  Component,
  StyleSheet,
  Text,
  View,
  ListView,
  Image,
  ProgressBarAndroid,
  TouchableHighlight,
  Navigator,
} from 'react-native';
import TabNavigator from 'react-native-tab-navigator';
import styles from './app/Styles/main';
import MovieList from './app/Components/MovieList';
import UsBox from './app/Components/UsBox';
import User from './app/Components/User';
import Context from './app/Components/Context';
import Ionicons from 'react-native-vector-icons/Ionicons';






class reacttest extends Component {
  constructor(props) {
    super(props);
    this.state = {selectedTab: 'best'}
  }

  render() {
    return (

      <TabNavigator>
        <TabNavigator.Item
          selected={this.state.selectedTab === 'best'}
          title="高分电影"
          titleColor="#333"
          selectedTitleStyle = {{color:"#B72712"}}
          onPress={() => this.setState({ selectedTab: 'best' })}
          renderIcon={() => <Ionicons name="videocamera" size={30} color="#333" />}
          renderSelectedIcon={() => <Ionicons name="videocamera" size={30} color="#B72712" />}
          >

          <Context />

        </TabNavigator.Item>
        <TabNavigator.Item
          selected={this.state.selectedTab === 'us'}
          title="北美电影"
          selectedTitleStyle = {{color:"#B72712"}}
          renderIcon={() => <Ionicons name="film-marker" size={30} color="#333" />}
          renderSelectedIcon={() => <Ionicons name="film-marker" size={30} color="#B72712" />}
          onPress={() => this.setState({ selectedTab: 'us' })}>

          <UsBox />
        </TabNavigator.Item>
        <TabNavigator.Item
          selected={this.state.selectedTab === 'user'}
          title="个人中心"
          selectedTitleStyle = {{color:"#B72712"}}
          renderIcon={() => <Ionicons name="android-person" size={30} color="#333" />}
          renderSelectedIcon={() => <Ionicons name="android-person" size={30} color="#B72712" />}
          onPress={() => this.setState({ selectedTab: 'user' })}>

          <User />
        </TabNavigator.Item>
      </TabNavigator>

    );
  }
}

AppRegistry.registerComponent('reacttest', () => reacttest);
