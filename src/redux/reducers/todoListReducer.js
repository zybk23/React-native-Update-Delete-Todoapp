import AsyncStorage from '@react-native-community/async-storage';

const initialState = {
	items: [
		{
			id: 1,
			title: 'Taha',
			description: 'Taha Zeybek',
		},
		{
			id: 2,
			title: 'Ammar',
			description: 'Ammar Çelenk',
		},
		{
			id: 3,
			title: 'Fatih',
			description: 'Fatih Çiçek',
		},
	],
	loading: false,
	singleUser: [],
};

export default function todoListReducer(state = initialState, action) {
	switch (action.type) {
		case 'loading_start_end':
			return {
				...state,
				loading: action.payload,
			};
		case 'add_item':
			let Addedtems = state.items;
			Addedtems.push(action.payload);
			console.log(Addedtems);
			return {
				...state,
				items: Addedtems,
			};
		case 'set_changes':
			let updateItem = state.items.filter((item) => item.id !== action.payload.id);
			updateItem.push(action.payload);
			return {
				...state,
				items: updateItem,
			};
		case 'delete_item':
			let deleteItem = state.items.filter((item) => item.id !== action.payload);
			return {
				...state,
				items: deleteItem,
			};
		default:
			return state;
	}
}
