import React from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {StyleSheet, FlatList, SafeAreaView, KeyboardAvoidingView, Platform, TouchableOpacity, Text, View} from 'react-native';
import {updateItem, deleteItem} from '../redux/actions/todoListActions';

const Home = (props) => {
	const listItems = useSelector((state) => state.todoListReducer.items);
	//console.log('Home', listItems);
	const dispatch = useDispatch();
	const singleItem = (id) => {
		const data = listItems.filter((item) => item.id === id);
		dispatch(updateItem(data));
		props.navigation.navigate('UpdateItem');
	};
	const deleteItems = (id) => {
		dispatch(deleteItem(id));
	};
	//console.log(listItems);
	return (
		<SafeAreaView style={{flex: 1}}>
			<KeyboardAvoidingView behavior={Platform.OS == 'ios' ? 'padding' : 'height'} style={{flex: 1}}>
				<FlatList
					style={{flex: 1, backgroundColor: 'white'}}
					data={listItems}
					keyExtractor={(item) => item.title}
					renderItem={({item}) => {
						return (
							<TouchableOpacity style={styles.viewList}>
								<View style={styles.info}>
									<Text>{item.title}</Text>
									<Text>{item.description}</Text>
								</View>
								<View style={styles.buttons}>
									<TouchableOpacity style={styles.button} onPress={() => singleItem(item.id)}>
										<Text style={styles.text}>Update</Text>
									</TouchableOpacity>
									<TouchableOpacity style={styles.button} onPress={() => deleteItems(item.id)}>
										<Text style={styles.text}>Delete</Text>
									</TouchableOpacity>
								</View>
							</TouchableOpacity>
						);
					}}
				/>
			</KeyboardAvoidingView>
		</SafeAreaView>
	);
};

const styles = StyleSheet.create({
	home: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center',
		fontSize: 30,
		height: '100%',
	},
	viewList: {
		flex: 1,
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'center',
		marginBottom: 30,
		marginTop: 40,
		height: 80,
	},
	info: {
		flexDirection: 'column',
		alignItems: 'center',
		justifyContent: 'center',
		marginRight: 40,
		backgroundColor: 'gray',
		width: 400,
		height: 100,
	},
	buttons: {
		flexDirection: 'column',
		alignItems: 'center',
		justifyContent: 'center',
	},
	button: {
		flexDirection: 'column',
		alignItems: 'center',
		justifyContent: 'center',
		backgroundColor: 'orange',
		width: 80,
		height: 40,
		marginTop: 10,
	},
	text: {
		color: '#fff',
	},
});

export default Home;
