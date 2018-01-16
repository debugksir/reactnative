import React, { Component } from 'react';
import Styled from 'styled-components/native';

const Switch = Styled.Switch`
	
`;
const Text = Styled.Text`
	color: #000000;
`;
const View = Styled.View`
`;

export default class SwitchTheme extends Component {
	constructor(props) {
		super(props)
		this._switchHandler = this._switchHandler.bind(this);
	}
	_switchHandler() {
		const { switchFlag, actions } = this.props;
		actions.switchThemeAction(switchFlag);
	}
	render() {
		const { switchFlag } = this.props;
		return (
			<View>
				<Switch 
					onTintColor='#2DFC63'
					TintColor='#9D9B9B'
					value={switchFlag}
					onValueChange={this._switchHandler}
				/>
				<Text>{switchFlag ? 'true' : 'false'}</Text>
			</View>
		)
	}
}