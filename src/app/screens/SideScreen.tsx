import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Drawer } from 'react-native-paper';
import { DrawerContentComponentProps, DrawerItem } from '@react-navigation/drawer';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

type props = { label: string; iconName: string; onPress: () => void };
function MyDrawerItem({ label, iconName, onPress }: Readonly<props>) {
	const icon = ({ color, size }: { focused: boolean; size: number; color: string }): React.JSX.Element => (
		<Icon name={iconName} color={color} size={size} />
	);
	return <DrawerItem inactiveTintColor='black' icon={icon} label={label} onPress={onPress} />;
}

export default function SideScreen({ navigation }: Readonly<DrawerContentComponentProps>) {
	return (
		<View style={styles.container}>
			<Drawer.Section style={styles.drawerSection}>
				<MyDrawerItem label='Home' iconName='home-outline' onPress={() => navigation.navigate('Home')} />
				<MyDrawerItem
					label='Personality Analysis'
					iconName='alpha-p-box'
					onPress={() => navigation.navigate('PersonalityAnalysis')}
				/>
				<MyDrawerItem
					label='Personality Types'
					iconName='alpha-t-box-outline'
					onPress={() => navigation.navigate('PersonalityTypes')}
				/>
				{/* <MyDrawerItem label='Profile' iconName='account-outline' onPress={() => navigation.navigate('Profile')} /> */}
			</Drawer.Section>
		</View>
	);
}

const styles = StyleSheet.create({
	avatar: {
		position: 'absolute',
		right: 18,
		bottom: -18,
	},
	container: {
		flex: 1,
		marginTop: 30,
	},
	drawerSection: {
		marginTop: 18,
		borderBottomWidth: 1,
	},
});
