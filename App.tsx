import { PaperProvider } from 'react-native-paper';
import DrawerNavigation from './src/app/navigations/DrawerNavigation';

export default function App() {
	return (
		<PaperProvider
			theme={{
				dark: true,
				version: 3,
				colors: {
					primary: '#1ECBE1',
					secondary: '#333',
				},
			}}
		>
			<DrawerNavigation />
		</PaperProvider>
	);
}
