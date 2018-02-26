import React, { Component } from 'react';
import PropTypes from 'prop-types';
import  { connect } from 'react-redux';
import styled from 'styled-components/native';
import Icon from 'react-native-vector-icons/FontAwesome';
import Header from '../components/me/header';
import PersonalBar from '../components/me/personalBar';
import Record from '../components/me/record';
import Sign from '../components/me/sign';
import FuncMenu from '../components/me/funcMenu';

import PopupDialog, { SlideAnimation, DialogTitle, DialogButton } from 'react-native-popup-dialog';
const slideAnimation = new SlideAnimation({
  slideFrom: 'bottom',
});

const View = styled.View`
	flex: 1;
	width: 100%;
	height: 100%;
	background-color: ${props => props.theme.mainBg};
`;
const DialogView = styled.View``;
const Text = styled.Text``;

export default class Me extends Component<{}> {
	constructor(props) {
		super(props);
		this._dialog = this._dialog.bind(this);
	}
	static navigationOptions = {
		tabBarLabel: '我的',
		tabBarIcon: (tintColor) => (<Icon name="user" color={tintColor.tintColor} size={20} style={{marginTop: -6}} />)
	};
	_dialog() {
		this.popupDialog.show();
	}
	render() {
		return (
			<View>
				<Header 
					nav={this.props.navigation}
					dialogFunc={this._dialog}
				 />
				<PersonalBar />
				<Record />
				<Sign />
				<FuncMenu nav={this.props.navigation}/>
				<PopupDialog
					ref={(popupDialog) => { this.popupDialog = popupDialog; }}
					dialogAnimation={slideAnimation}
				>
					<DialogTitle title="分享" />
					<DialogButton textStyle={{fontSize: 12}} text="分享到朋友圈" onPress={()=>{}} />
					<DialogButton textStyle={{fontSize: 12}} text="分享到微博" onPress={()=>{}} />
					<DialogButton textStyle={{fontSize: 12}} text="分享到QQ空间" onPress={()=>{}} />
				</PopupDialog>
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

