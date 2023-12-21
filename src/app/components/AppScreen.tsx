import { SafeAreaView, StyleProp, StyleSheet, View, ViewStyle } from 'react-native';
import React from 'react';
import { StatusBar } from 'expo-status-bar';
import Constants from 'expo-constants';

type props = {
	children: any;
	style?: StyleProp<ViewStyle>;
	useStatusBarHeight?: boolean;
};
export default function AppScreen({ children, style, useStatusBarHeight = false }: Readonly<props>) {
	return (
		<SafeAreaView style={[styles.screen, { paddingTop: useStatusBarHeight ? Constants.statusBarHeight : 0 }]}>
			{/* view for horizontal issue */}
			<View style={[styles.view, style]}>{children}</View>
			<StatusBar style='auto' />
		</SafeAreaView>
	);
}

const styles = StyleSheet.create({
	background: {
		flex: 1,
	},
	screen: {
		flex: 1,
	},
	view: {
		flex: 1,
		padding: 10,
	},
});
