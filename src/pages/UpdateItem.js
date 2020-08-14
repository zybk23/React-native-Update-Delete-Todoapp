import React, {useState, useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {View, StyleSheet, ActivityIndicator} from 'react-native';

import {loading, setChanges} from '../redux/actions/todoListActions';
import Input from '../components/Input';
import Button from '../components/Button';

const UpdateItem = () => {
	const singleItem = useSelector((state) => state.updateListReduer);

	//onst [data, setData] = useState({...singleItem[0]});
	///console.log('item:', {...singleItem}[0].title);
	const [title, setTitle] = useState({...singleItem}[0].title);
	const [description, setDescription] = useState({...singleItem}[0].description);

	const dispatch = useDispatch();

	useEffect(() => {
		setTitle({...singleItem}[0].title);
		setDescription({...singleItem}[0].description);
	}, [singleItem]);
	const changeObj = {
		id: {...singleItem}[0].id,
		title,
		description,
	};
	return (
		<>
			<View style={styles.container}>
				<Input placeholder={'Title'} value={title} onChangeText={(value) => setTitle(value)} />
				<Input
					placeholder={'Description'}
					value={description}
					onChangeText={(value) => {
						setDescription(value);
					}}
				/>
				<Button
					text={'Update'}
					onPress={() => {
						dispatch(setChanges(changeObj));
					}}
				/>
			</View>
		</>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		flexDirection: 'column',
		alignItems: 'center',
		justifyContent: 'center',
	},
});

export default UpdateItem;
