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
  ToolbarAndroid,
  TextInput,
} from 'react-native';

import styles from '../Styles/main';
import ToolBar from './ToolBar';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Icon from 'react-native-vector-icons/FontAwesome';






class User extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (

      <View >
        <ToolBar name="登陆"/>
        <View style={styles.login}>
          <Text style={{fontSize:40,marginTop:30, color:'#B72712'}}>欢迎来到米饭</Text>
          <TextInput style={styles.userInput} placeholder='请输入您的手机号'/>
          <TextInput style={styles.pwdInput} placeholder='密码'/>
          <TouchableHighlight style={styles.button}
              underlayColor='#99d9f4'>
            <Text style={styles.buttonText}>登录</Text>
          </TouchableHighlight>
        <View style={{flexDirection: 'row', marginTop: 10}}>
          <Text style={{flex:1,fontSize:16}}>注册账号</Text>
          <Text style={{flex:1}}> | </Text>
          <Text style={{flex:2,fontSize:16}}>忘记密码</Text>
        </View>
        </View>
      </View>

    );
  }
}



export { User as default };
