import React, { Component } from 'react';
import PropTypes from 'prop-types';
import  { connect } from 'react-redux';
import Styled from 'styled-components/native';
import Icon from 'react-native-vector-icons/FontAwesome';
import Header from '../components/me/header';
import PersonalBar from '../components/me/personalBar';
import Record from '../components/me/record';
import Sign from '../components/me/sign';
import FuncMenu from '../components/me/funcMenu';

const View = Styled.View`
	flex: 1;
	width: 100%;
	height: 100%;
	background-color: ${props => props.theme.mainBg};
`;
export default class Me extends Component<{}> {
	static navigationOptions = {
		tabBarLabel: '我的',
		tabBarIcon: (tintColor) => (<Icon name="user" color={tintColor.tintColor} size={20} style={{marginTop: -6}} />)
	};
	render() {
		const { navigate } = this.props.navigation;
		return (
			<View>
				<Header {...this.props} />
				<PersonalBar />
				<Record />
				<Sign />
				<FuncMenu />
			</View>

		)
	}
}
// const mapStateToProps = (state) => {
//   const { navigation } = state;
//   return {
//     navigation
//   };
// };

// export default connect(mapStateToProps)(Me) ;

