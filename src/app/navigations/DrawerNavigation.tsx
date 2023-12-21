import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import HomeScreen from '../screens/HomeScreen';
import ProfileScreen from '../screens/ProfileScreen';

export default function DrawerNavigation() {
	const Drawer = createDrawerNavigator();
	return (
		<NavigationContainer>
			<Drawer.Navigator>
				<Drawer.Screen name='Home' component={HomeScreen} />
				<Drawer.Screen name='Profile' component={ProfileScreen} />
			</Drawer.Navigator>
		</NavigationContainer>
	);
}
