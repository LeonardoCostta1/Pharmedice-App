import React, { Component } from 'react';

import { View,Image } from 'react-native';

export default class Etica extends Component {

    static navigationOptions = {
    headerTitle: <Image source={require('../../assets/img/logoTop.png')}/>,
    headerStyle: {
    backgroundColor: '#7569f5',
    },
    headerTintColor: '#fff',
    };
  render() {
    return <View />;
  }
}
