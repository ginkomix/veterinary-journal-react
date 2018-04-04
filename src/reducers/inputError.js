import {INPUT_ERROR} from '../actions/inputError';

const DEFAULT_INPUT = '';

export default (state = DEFAULT_INPUT,action)=>{
	switch(action.type) {
	case INPUT_ERROR:
		return action.payload;
	default:
		return state;			
	}	
}