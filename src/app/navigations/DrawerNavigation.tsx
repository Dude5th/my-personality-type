import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import HomeScreen from '../screens/HomeScreen';
import ProfileScreen from '../screens/ProfileScreen';
import PersonalityAnalysisScreen from '../screens/PersonalityAnalysisScreen';
import SideScreen from '../screens/SideScreen';
import PersonalityTypesScreen from '../screens/PersonalityTypesScreen';

export default function DrawerNavigation() {
	const Drawer = createDrawerNavigator();
	return (
		<NavigationContainer>
			<Drawer.Navigator drawerContent={props => <SideScreen {...props} />}>
				<Drawer.Screen name='Home' component={HomeScreen} />
				<Drawer.Screen name='PersonalityAnalysis' component={PersonalityAnalysisScreen} />
				<Drawer.Screen name='PersonalityTypes' component={PersonalityTypesScreen} />
				<Drawer.Screen name='Profile' component={ProfileScreen} />
			</Drawer.Navigator>
		</NavigationContainer>
	);
}
