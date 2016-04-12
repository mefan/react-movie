'use strict';

import React from 'react-native';

let { StyleSheet } = React;

let styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
  },
  item :{
    flexDirection:'row',
    borderBottomWidth: 1,
    borderColor:'#666666',
    paddingBottom:6,
    paddingTop:6,
    flex: 1,
  },
  itemContent: {
    flex: 1,
    marginLeft: 13,
  },
  itemText: {
    fontSize: 16,
    height: 20,
  },
  image: {
    height:120,
    width:100,

  },
  loading: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  toolbar: {
    backgroundColor: '#B72712',
    height: 55,
    alignItems: 'center'
  },
login: {
  padding:10,
  alignItems: 'center'

},
button: {
  height: 40,
  flex: 1,
  flexDirection: 'row',
  backgroundColor: '#B72712',
  borderColor: '#B72712',
  borderWidth: 1,
  borderRadius: 5,
  marginBottom: 10,
  alignSelf: 'stretch',
  justifyContent: 'center',
  marginTop: 20
},

buttonText: {
  fontSize: 18,
  color: 'white',
  alignSelf: 'center',

},

userInput: {
  height: 40,
  paddingLeft: 10,
  marginTop: 10,
  flex: 4,
  fontSize: 14,
  backgroundColor:'#fff',
  borderWidth: 1,
  borderColor: '#fff',
  borderRadius: 8,
  color: '#48BBEC'
},
pwdInput: {
  height: 40,
  paddingLeft: 10,
  marginTop: 5,
  flex: 4,
  fontSize: 14,
  backgroundColor:'#fff',
  borderWidth: 1,
  borderColor: '#fff',
  borderRadius: 8,
  color: '#48BBEC'

}
});

export { styles as default };
