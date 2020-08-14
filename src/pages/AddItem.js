import React, {useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {View, StyleSheet, ActivityIndicator} from 'react-native';

import {loading, addItem} from '../redux/actions/todoListActions';
import Input from '../components/Input';
import Button from '../components/Button';

const AddItem = () => {
	const loadingValue = useSelector((state) => state.todoListReducer.loading);
	const dispatch = useDispatch();
	const [title, setTitle] = useState();
	const [dsc, setDsc] = useState();
	return (
		<View style={styles.container}>
			<Input placeholder={'Title'} value={title} onChangeText={(value) => setTitle(value)} />
			<Input placeholder={'Description'} value={dsc} onChangeText={(dsc) => setDsc(dsc)} />
			<Button
				text={'Add'}
				onPress={() => {
					dispatch(loading(true));
					setTimeout(() => {
						let obj = {
							id: 4,
							title,
							description: dsc,
						};
						dispatch(addItem(obj));
						dispatch(loading(false));
					}, 3000);
				}}
			/>
			{loadingValue && <ActivityIndicator size="large" color="grey" style={{marginTop: 20}} />}
		</View>
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

export default AddItem;
