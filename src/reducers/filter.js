import {CHECK,TEXT,DATA_MAX,DATA_MIN} from '../actions/filter'
const DEFAULT_STATE = {
	completed:false,
	text: '',
	dataMax: 0,
	dataMin: 0,
};
export default (state = DEFAULT_STATE,action) => {
	switch(action.type) {
		case CHECK :{
			let stateNew = {...state};
			stateNew.completed = !stateNew.completed;
			return stateNew;
		}
		case TEXT :{
			let stateNew = {...state};
			stateNew.text = action.text;
			return stateNew;
		}

		
		case DATA_MAX :{
			let stateNew = {...state};
			stateNew.dataMax = action.data;
			return stateNew;
		}
		
		case DATA_MIN : {
			let stateNew = {...state};
			stateNew.dataMin = action.data;
			return stateNew;
		}
		default: return state;
	}
}