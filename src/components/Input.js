import React from 'react';
import {StyleSheet, TextInput, Dimensions} from 'react-native';

const {width, height} = Dimensions.get('window');

const Input = (props) => {
	return (
		<TextInput
			placeholder={props.placeholder}
			secureTextEntry={props.secureTextEntry}
			keyboardType={props.keyboardType}
			style={[styles.input, props.style]}
			value={props.value}
			onChangeText={(value) => props.onChangeText(value)}
		/>
	);
};

const styles = StyleSheet.create({
	input: {
		width: width * 0.9,
		height: height * 0.06,
		backgroundColor: '#fcfcfc',
		borderWidth: 0.5,
		borderColor: 'gray',
		borderRadius: 7,
		paddingLeft: 10,
		marginBottom: height * 0.02,
		fontSize: 18,
	},
});

export default Input;
