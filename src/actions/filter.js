export const CHECK = 'check';
export const TEXT = 'text';
export const DATA_MAX = 'dataMax';
export const DATA_MIN = 'dataMin';

export const check = ()=>({
	type:CHECK
});

export const text = (payload) =>({
	type: TEXT,
	text:payload
})

export const dataMax = (payload) =>({
	type: DATA_MAX,
	data:payload
})

export const dataMin = (payload) =>({
	type: DATA_MIN,
	data:payload
})