// import { combineReducers } from 'redux';
import types from '../constants/actionTypes';

const initState = {
	countValue: 0,
	switchFlag: false,
	fontSize: 'small'
};

const reducers = (state = initState, action) => {
	let countValue = state.countValue;
	let switchFlag = state.switchFlag;
	switch(action.type) {
		case types.increase:
			return {...state, countValue: countValue + 1}
		case types.decrease:
			return {...state, countValue: countValue - 1}
		case types.switchtheme:
			return {...state, switchFlag: !action.switchFlag}
		case types.switchfont:
			return {...state, fontSize: action.fontSize}
		default:
			return state
	}
};

// const reducers = combineReducers({
// 	counter,
// 	switchTheme
// }) 
export default reducers;

