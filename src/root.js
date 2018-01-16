
import React, { Component } from 'react';
import { TabNavigator } from 'react-navigation';
import { connect } from 'react-redux';
import styled, { ThemeProvider }from "styled-components/native";

import MeScreen from './pages/me';
import MainScreen from './pages/home';

const theme = {
  main: '#44E2C4'
}

const darkTheme = {
  main: '#DEE4AF'
}
const Text = styled.Text``;

const TabNav = TabNavigator({
  Main: { screen: MainScreen },
  Me: { screen: MeScreen }
},{
  tabBarPosition: 'bottom',
  animationEnabled: true,
  tabBarOptions: {
    activeTintColor: '#e91e63',
    labelStyle: {
      fontSize: 12,
      color: '#333333',
    },
    style: {
      backgroundColor: '#EEEEEE',
    }
  }
});

class Main extends Component {
  render() {
    const { switchFlag } = this.props;
    return(
      <ThemeProvider theme={switchFlag ? theme : darkTheme}>
        <TabNav />
      </ThemeProvider>
    )
  }
}

const mapStateToProps = (state) => ({
    switchFlag: state.switchFlag
})
const Root = connect(mapStateToProps)(Main);
export default Root;
