import React, { Component } from 'react';
import { connect } from 'react-redux';
import styled, { ThemeProvider }from "styled-components/native";
import StackNav from './routes/routes';
import theme from './constants/theme';

class Main extends Component {
  render() {
    const { switchFlag, fontSize } = this.props;
    const colorTheme = switchFlag ? theme.dark : theme.light;
    const fontTheme = theme[fontSize];
    const Theme = Object.assign({}, colorTheme, fontTheme);
    return(
      <ThemeProvider theme={Theme} >
        <StackNav />
      </ThemeProvider>
    )
  }
}

const mapStateToProps = (state) => ({
    switchFlag: state.switchFlag,
    fontSize: state.fontSize
})
const Root = connect(mapStateToProps)(Main);
export default Root;
