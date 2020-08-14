import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createStackNavigator} from '@react-navigation/stack';
import Home from '../pages/Home';
import UpdateItem from '../pages/UpdateItem';
import AddItem from '../pages/AddItem';
import MyTabBar from './tabbar';

const HomeStack = createStackNavigator();
const Tab = createBottomTabNavigator();

const Bar = () => {
	return (
		<NavigationContainer>
			<Tab.Navigator tabBar={(props) => <MyTabBar {...props} />}>
				<Tab.Screen name={'Home'} component={Home} />
				<Tab.Screen name={'AddItem'} component={AddItem} />
				<Tab.Screen name={'UpdateItem'} component={UpdateItem} />
			</Tab.Navigator>
		</NavigationContainer>
	);
};

export default Bar;
