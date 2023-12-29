import { StyleSheet } from 'react-native';
import React from 'react';
import { Button } from 'react-native-paper';

export default function BackButton({ disabled, onPress }: Readonly<{ disabled?: boolean; onPress: () => void }>) {
	return (
		<Button disabled={disabled} onPress={onPress}>
			Back
		</Button>
	);
}

const styles = StyleSheet.create({});
