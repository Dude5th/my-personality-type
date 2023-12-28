import { Button } from 'react-native-paper';

type props = {
	children: React.ReactNode;
	onPress?: () => void;
};

export default function AppButton({ children, onPress }: Readonly<props>) {
	return (
		<Button style={{ margin: 20, padding: 20 }} mode='contained' onPress={onPress}>
			{children}
		</Button>
	);
}
