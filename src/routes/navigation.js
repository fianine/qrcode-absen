import React from 'react';
import { createAppContainer, createStackNavigator } from 'react-navigation';
import LoginScreen from '../components/auth/login';

const Navigator = createStackNavigator({
  Login: {
    screen: LoginScreen,
    navigationOptions: {
      header: null
    }
  }
},{
  initialRouteName: 'Login',
  swipeEnabled: false,
  animationEnabled: false,
  lazy: true,
  transitionConfig: () => ({
    transitionSpec: {
      duration: 0,
    },
  }),
});

export default createAppContainer(Navigator);
