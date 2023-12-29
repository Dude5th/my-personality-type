import React from 'react';
import { Button } from 'react-native-paper';

export default function NextButton({ disabled, onPress }: Readonly<{ disabled?: boolean; onPress: () => void }>) {
	return (
		<Button disabled={disabled} mode='contained' onPress={onPress}>
			Next
		</Button>
	);
}
