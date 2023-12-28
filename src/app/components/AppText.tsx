import { StyleProp, StyleSheet, Text, TextStyle } from 'react-native';
import React from 'react';

type props = {
	children: string;
	title?: boolean;
	style?: StyleProp<TextStyle>;
};

export default function AppText({ children, style, title = false }: Readonly<props>) {
	return <Text style={[styles.container, style, title && { fontWeight: 'bold' }]}>{children}</Text>;
}

const styles = StyleSheet.create({
	container: {
		fontFamily: 'Roboto',
		fontSize: 18,
		marginBottom: 5,
		marginTop: 5,
	},
});
