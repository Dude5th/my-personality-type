import React from 'react';
import { DrawerContentComponentProps, createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import HomeScreen from '../screens/HomeScreen';
import ProfileScreen from '../screens/ProfileScreen';
import PersonalityAnalysisScreen from '../screens/PersonalityAnalysisScreen';
import SideScreen from '../screens/SideScreen';
import PersonalityTypesScreen from '../screens/PersonalityTypesScreen';

const Drawer = createDrawerNavigator();

export default function DrawerNavigation() {
	const SideScreenComponent = (props: DrawerContentComponentProps) => <SideScreen {...props} />;
	return (
		<NavigationContainer>
			<Drawer.Navigator drawerContent={SideScreenComponent}>
				<Drawer.Screen name='Home' component={HomeScreen} />
				<Drawer.Screen
					name='PersonalityAnalysis'
					options={{ title: 'Personality Analysis' }}
					component={PersonalityAnalysisScreen}
				/>
				<Drawer.Screen
					name='PersonalityTypes'
					options={{ title: 'Personality Types' }}
					component={PersonalityTypesScreen}
				/>
				<Drawer.Screen name='Profile' component={ProfileScreen} />
			</Drawer.Navigator>
		</NavigationContainer>
	);
}
