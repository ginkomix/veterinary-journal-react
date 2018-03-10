import {CHOICE} from '../actions/startForm';

const DEFAULT_STATE = 'log';

export default (state = DEFAULT_STATE,action) =>{
    switch(action.type) {
        case CHOICE :
            return action.payload;
        default: return state;          
    }
}