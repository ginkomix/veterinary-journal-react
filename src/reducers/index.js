import {combineReducers} from 'redux';
import item from'./item';
import sort from'./sort';
import filter from './filter';
import contextMenu from './contextMenu';
import startForm from './startForm';
export default combineReducers({
	item,
	sort,
	filter,
	contextMenu,
    startForm
});