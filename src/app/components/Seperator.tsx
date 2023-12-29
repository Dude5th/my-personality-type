import { StyleSheet, View } from 'react-native';
import React from 'react';

export default function Seperator() {
	return <View style={styles.container} />;
}

const styles = StyleSheet.create({
	container: { borderStyle: 'solid', borderWidth: 1, margin: 20 },
});
