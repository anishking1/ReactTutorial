'use strict'; // u need this to disp the img

import React, { Component } from 'react';
import {
  AppRegistry,
  Image,
  StyleSheet,
  Text,
  TextInput,
  View
} from 'react-native';

/*
var React = require('react-native');
var {
  AppRegistry,
  Image,
  StyleSheet,
  Text,
  TextInput,
  View,
} = React;

*/

/*
class ReactTutorial extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Hi! This is Goofy Licks!
        </Text>
        <Image
          source={{uri : 'https://s-media-cache-ak0.pinimg.com/736x/f3/fd/a8/f3fda8bfe638301d3bb9fa8d570eaf1a.jpg'}}
          style={styles.customimg}
        />
      </View>
    );
  }
}
*/

class ReactTutorial extends Component {
  render() {
    return (
      <View style={styles.container}>
        <TextInput
          autoCapitalize="none"
          autoCorrect={false}
          //automaticallyAdjustContentInsets={false}
          placeholder="Search for a project..."
          //onChangeText={(text) => this.setState({text})}
          //value = {this.state.text}
          style={styles.searchBarInput}
          onEndEditing={this.onSearchChange}
        />
      </View>
    );
  }
}

/*
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  customimg: {
    width: 200,
    height: 300,
  },
});
*/

var styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  searchBarInput: {
    flex: 1,
    height: 30,
    marginTop: 20,
    marginBottom: 800,
    padding: 2,
    fontSize: 10,
    borderWidth: 0,
    //borderColor: 'red',
    backgroundColor: 'grey',
  },
});

AppRegistry.registerComponent('ReactTutorial', () => ReactTutorial);
