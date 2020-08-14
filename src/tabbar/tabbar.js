import React from 'react';
import {View, Text, TouchableOpacity, Animated, StyleSheet} from 'react-native';
import {Home, Search} from './icons/index';
import Ionicons from 'react-native-vector-icons/Ionicons';

function MyTabBar({state, descriptors, navigation}) {
	const focusedOptions = descriptors[state.routes[state.index].key].options;
	if (focusedOptions.tabBarVisible === false) {
		return null;
	}
	return (
		<View style={{flexDirection: 'row', backgroundColor: '#fff'}}>
			{state.routes.map((route, index) => {
				const {options} = descriptors[route.key];
				const label = options.tabBarLabel !== undefined ? options.tabBarLabel : options.title !== undefined ? options.title : route.name;

				const isFocused = state.index === index;

				const onPress = () => {
					const event = navigation.emit({
						type: 'tabPress',
						target: route.key,
						canPreventDefault: true,
					});

					if (!isFocused && !event.defaultPrevented) {
						navigation.navigate(route.name);
					}
				};

				return (
					<View key={index} style={styles.tabbar}>
						{label === 'Home' && (
							<View key={index} style={styles.home}>
								<TouchableOpacity style={[styles.homeView]} onPress={onPress}>
									<Home stroke={isFocused ? '#FEA501' : 'red'} />
									<Text style={{color: isFocused ? '#FEA501' : 'red'}}>Anasayfa</Text>
								</TouchableOpacity>
							</View>
						)}
						{label === 'AddItem' && (
							<View key={index} style={styles.home}>
								<TouchableOpacity style={[styles.homeView]} onPress={onPress}>
									<Ionicons name="add" size={25} />
									<Text style={{color: isFocused ? '#FEA501' : 'red'}}>AddItem</Text>
								</TouchableOpacity>
							</View>
						)}
					</View>
				);
			})}
		</View>
	);
}

const styles = StyleSheet.create({
	tabbar: {
		flexDirection: 'row',
		justifyContent: 'center',
		alignItems: 'center',
		flex: 1,
		backgroundColor: '#999',
		paddingLeft: 80,
	},
	home: {
		padding: 15,
	},
	homeView: {
		padding: 5,
		flexDirection: 'column',
		justifyContent: 'center',
		alignItems: 'center',
	},
	bottom: {
		paddingTop: 8,
		flexDirection: 'column',
		justifyContent: 'center',
		alignItems: 'center',
		borderRadius: 50,
		height: 56,
		flex: 1,
	},
	dot: {
		borderRadius: 50,
		width: 4,
		height: 4,
		backgroundColor: 'red',
		marginTop: 8,
	},
});

export default MyTabBar;

// ...
