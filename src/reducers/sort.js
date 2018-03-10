import {SORT_BY} from '../actions/sort';

const  DEFAULT_SORT = null;

export default (state = DEFAULT_SORT, action)=>{
	switch(action.type) {
		case SORT_BY: 
				return action.sort;	
		default: return state;
	}	
	
}