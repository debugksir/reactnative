import React, { Component } from 'react';
import PropTypes from 'prop-types';
import  { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import Styled from 'styled-components/native';
// import { increaseAction, decreaseAction, switchThemeAction } from '../actions/actions';
import * as actionCreators from '../actions/actions';
import Counter from '../components/counter';
import SwitchTheme from '../components/switchTheme';

const View = Styled.View`
	flex: 1;
	width: 100%;
	height: 100%;
	background-color: ${props => props.theme.main};
`;
class Me extends Component<{}> {
	static navigationOptions = {
		tabBarLabel: '我',
	};
	render() {
		// const { countValue, switchFlag, actions } = this.props;
		// console.error({...this.props});
		return (
			<View >
				<Counter 
					{...this.props}
				/>
				<SwitchTheme 
					{...this.props}
				/>
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

export default connect(mapStateToProps, mapDispatchToProps)(Me);

