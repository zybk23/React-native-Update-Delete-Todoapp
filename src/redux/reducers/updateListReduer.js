

const initialState = [];

export default function updateListReducer(state = initialState, action) {
	switch (action.type) {
		case 'update_item':
			return action.payload;
		default:
			return state;
	}
}
