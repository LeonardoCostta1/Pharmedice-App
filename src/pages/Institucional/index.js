import React, { Component } from 'react';
import Icons from 'react-native-vector-icons/Ionicons';
import { createBottomTabNavigator, createAppContainer } from 'react-navigation';
import QuemSomos from './QuemSomos'
import Etica from './Etica'
import OQueFazemos from './OQueFazemos';
import {Image} from 'react-native'

const TabNavigator = createBottomTabNavigator({
  'A Pharmedice':QuemSomos,
  'O Que Fazemos':OQueFazemos ,
  MVV:Etica,
},
{
  defaultNavigationOptions: ({ navigation }) => ({



    tabBarIcon: ({ focused, horizontal, tintColor }) => {
      const { routeName } = navigation.state;
      let IconComponent = Icons;
      let iconName;
      if (routeName === 'A Pharmedice') {
        iconName = `ios-information-circle${focused ? '' : '-outline'}`;
 
      } else if (routeName === 'MVV') {
        iconName = `ios-medal`;
      }
      else if (routeName === 'O Que Fazemos') {
        iconName = `ios-business`;
      }
      return <IconComponent name={iconName} size={25} color={tintColor} />;
    },
  }),
  tabBarOptions: {
    activeTintColor: '#7569f5',
    inactiveTintColor: '#000',
  },
  navigationOptions:{
    headerTitle: <Image source={require('../../assets/img/logoTop.png')}/>,
    headerStyle: {
      backgroundColor: '#7569f5',
    },
    headerTintColor: '#fff',
  }
},
);


export default createAppContainer(TabNavigator);