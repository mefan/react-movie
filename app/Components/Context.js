/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';

import React, {
  Text,
  Component,
  View,
  ListView,
  Image,
  ProgressBarAndroid,
  TouchableHighlight,
  Navigator,
  ToolbarAndroid,
} from 'react-native';

import styles from '../Styles/main';
import MovieList from './MovieList';


class Context extends Component {
  render() {
    return(
    <Navigator
          sytle={styles.navigator}
            initialRoute={{ name: '高分电影', component: MovieList }}
            configureScene={(route) => {
              return Navigator.SceneConfigs.VerticalDownSwipeJump;
            }}
            renderScene={(route, navigator) => {
              let Component = route.component;
              return <Component {...route.params} navigator={navigator} />
            }} />
  )
  }
}

export {Context as default };
