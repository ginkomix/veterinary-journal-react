import {CHANGE_ITEM_ID} from '../actions/contextMenu';

const DEFAULT_ID = 0;

export default (state = DEFAULT_ID,action) => {
	switch(action.type) {
		case CHANGE_ITEM_ID:
			state = action.id;
			return state;	
		default: return state;
	}
	
}