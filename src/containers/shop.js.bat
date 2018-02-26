import React, { Component } from 'react';
import PropTypes from 'prop-types';
import  { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Styled from 'styled-components/native';
import * as actionCreators from '../actions/actions';
import Icon from 'react-native-vector-icons/FontAwesome';
import Counter from '../components/other/counter';
import SwitchTheme from '../components/other/switchTheme';
const View = Styled.View`
  flex: 1;
  width: 100%;
  height: 100%;
  background-color: ${props => props.theme.mainBg};
`;
class ShopScreen extends Component<{}> {
  static navigationOptions = ({navigation,screenProps}) => ({
    tabBarLabel: '书城',
    tabBarIcon: (tintColor) => (<Icon name="book" color={tintColor.tintColor} size={20} style={{marginTop: -6}} />)
  });
  render() {
    return (
      <View>
        <Counter {...this.props} />
        <SwitchTheme {...this.props} />
      </View>
    )
  }
}
const mapStateToProps = (state) => ({
  countValue: state.countValue,
  switchFlag: state.switchFlag
});
const mapDispatchToProps = (dispatch) => {
  const actions = bindActionCreators(actionCreators, dispatch)
  return {actions};
};

export default connect(mapStateToProps, mapDispatchToProps)(ShopScreen);


