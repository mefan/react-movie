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
} from 'react-native';

import styles from '../Styles/main';
import ToolBar from './ToolBar';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Icon from 'react-native-vector-icons/FontAwesome';






class MovieList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      movies: [],
    loaded:false,
    count: 10,
    start: 0,
    total: 0,
  };

    this.dataSource = new ListView.DataSource({
      rowHasChanged:(row1, row2) => row1 !== row2
  });
    this.DOUBAN_URL = 'https://api.douban.com/v2/movie/top250';
    this.fetchData();

  }
  requestUrl(
    url = this.DOUBAN_URL,
    count = this.state.count,
    start = this.state.start
  ){
    return(
      `${url}?count=${count}&start=${start}`
    );
  }
  fetchData() {
    // console.log(this.requestUrl());
    fetch(this.requestUrl())
      .then((response) => response.json())
      .then((responseData) => {
        let newStart = responseData.start + responseData.count
        this.setState({
          movies: responseData.subjects,
          loaded: true,
          total: responseData.total,
          start: newStart,

        });
      })
  }
  renderMoviesList(movie) {
    return (
      <TouchableHighlight
        underlayColor="rgba(34,26,38,0.1)"
        onPress={() => {
          console.log(`《${movie.title}》被点了！`)
        }}>
      <View style={styles.item}>
       <View style={styles.itemImage}>
        <Image style={styles.image}
          source={{uri: movie.images.large}}
          />
        </View>
        <View style={styles.itemContent}>
        <Text style={styles.itemHeader}>{movie.title}</Text>
        <Text style={styles.itemMeta}>
          {movie.original_title} ({movie.year})
        </Text>
        <Text style={styles.redText}>
          {movie.rating.average}
        </Text>
        </View>
      </View>
      </TouchableHighlight>
      );
  }
  loadMore() {
    fetch(this.requestUrl())
      .then(response => response.json())
      .then(responseData => {
        let newStart = responseData.start + responseData.count;
        this.setState({
          movies: [...this.state.movies, ...responseData.subjects],
          start: newStart
        })
      }).done();
  }
  onEndReached(){
    console.log(
      `到底了${this.state.start},总共${this.state.total}`
    );
    if (this.state.total > this.state.start) {
      this.loadMore();
    }
  }
  renderFooter(){
    if (this.state.total > this.state.start) {
      return(
        <View style = {{
            marginVertical: 20,
            paddingBottom: 0,
            alignSelf: 'center'
          }}>
          <ProgressBarAndroid styleAttr="Inverse" />
        </View>
      );
    } else {
      return(
        <View
        style={{
            marginVertical: 20,
            paddingBottom: 50,
            alignSelf: 'center'
          }}>
         <Text>没有内容了</Text>
       </View>
     );
    }
  }
  render() {
    if (!this.state.loaded) {
      return (

          <View style={styles.container}>
           <View style= {styles.loading}>
           <ProgressBarAndroid styleAttr="Inverse" color="#B72712"/>
           </View>
          </View>
        )
    }
    return (

      <View style={styles.container}>
        <ToolBar name="高分电影"/>
        <ListView
          renderFooter={this.renderFooter.bind(this)}
          pageSize={this.state.count}
          initialListSize={this.state.count}
          onEndReached={this.onEndReached.bind(this)}
          dataSource={this.dataSource.cloneWithRows(this.state.movies)}
          renderRow={this.renderMoviesList}
        />
      </View>

    );
  }
}



export { MovieList as default };
