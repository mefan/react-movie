/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';

import React, {
  Text,
  Component,
  View,
  Image,
  ToolbarAndroid,
} from 'react-native';

import styles from '../Styles/main';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Icon from 'react-native-vector-icons/FontAwesome';

class ToolBar extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (

      <View>
        <Ionicons.ToolbarAndroid
          actions={[]}
          //navIconName="android-arrow-back"
          style={styles.toolbar}
          titleColor="white"
          title={this.props.name} />

      </View>

    );
  }
}



export { ToolBar as default };
