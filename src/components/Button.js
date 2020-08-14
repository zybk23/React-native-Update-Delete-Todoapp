import React from 'react';
import {Text, TouchableOpacity, StyleSheet} from 'react-native';

const Button = (props) => {
	return (
		<TouchableOpacity style={[styles.button, props.style]} onPress={props.onPress}>
			<Text style={styles.buttonText}>{props.text}</Text>
		</TouchableOpacity>
	);
};

const styles = StyleSheet.create({
	button: {
		width: '60%',
		height: '6%',
		alignItems: 'center',
		justifyContent: 'center',
		backgroundColor: 'orange',
		borderRadius: 10,
	},
	buttonText: {
		color: '#fff',
		fontWeight: 'bold',
		fontSize: 20,
	},
});

export default Button;
