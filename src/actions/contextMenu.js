export const CHANGE_ITEM_ID = 'changeItemID';

export const changeItemID = (payload) => ({
	type:CHANGE_ITEM_ID,
	id: payload
});