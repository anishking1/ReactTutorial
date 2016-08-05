'use strict';

import React, { Component } from 'react';
import {
  AppRegistry,
  Image,
  StyleSheet,
  Text,
  View
} from 'react-native';

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

AppRegistry.registerComponent('ReactTutorial', () => ReactTutorial);
