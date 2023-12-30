import React from 'react';
import { Button, useTheme } from 'react-native-paper';

export default function BackButton({ disabled, onPress }: Readonly<{ disabled?: boolean; onPress: () => void }>) {
	const theme = useTheme();
	return (
		<Button textColor={theme.colors.secondary} mode='outlined' disabled={disabled} onPress={onPress}>
			Back
		</Button>
	);
}
