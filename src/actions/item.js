export const ADD = 'add';
export const DEL = 'del';
export const CHANGE_DONE = 'changeDone';
export const ADD_DEFAULT_ITEM = 'defaultItem';
export const CHANGE = 'change';


export const add = (payload) =>({
	type:ADD,
	item:payload
});

export const change = (payload) =>({
	type: CHANGE,
	item:payload
	
})

export const del = (payload) =>({
	type:DEL,
	id:payload
});

export const defaultItem = (payload)=>({
	type:ADD_DEFAULT_ITEM,
	items:payload
});

export const changeDone = (payload) =>({
	type:CHANGE_DONE,
	id:payload
});