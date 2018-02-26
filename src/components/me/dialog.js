import React, { Component } from 'react';
import styled from 'styled-components/native';
import PopupDialog, { SlideAnimation, DialogTitle } from 'react-native-popup-dialog';

const slideAnimation = new SlideAnimation({
  slideFrom: 'bottom',
});

const View = styled.View``;
const Text = styled.Text``;

export default class Dialog extends Component {
	render() {
		return (
			<View>
				<PopupDialog
					DialogTitle={<DialogTitle title='hello, I am ksir' />} 
					ref={(popupDialog) => { this.popupDialog = popupDialog; }}
					dialogAnimation={slideAnimation}
				>
					<Text> hello world ! </Text>
				</PopupDialog>
			</View>
		)
	}
}