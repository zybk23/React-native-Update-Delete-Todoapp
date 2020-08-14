export const loading = (data) => {
	return {type: 'loading_start_end', payload: data};
};

export const addItem = (data) => {
	console.log(data);
	return {type: 'add_item', payload: data};
};

export const updateItem = (data) => {
	return {type: 'update_item', payload: data};
};

export const setChanges = (data) => {
	//console.log('changeObj', data);
	return {type: 'set_changes', payload: data};
};

export const deleteItem = (id) => {
	//console.log(id);
	return {type: 'delete_item', payload: id};
};
