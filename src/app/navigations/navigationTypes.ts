import { DrawerScreenProps } from '@react-navigation/drawer';

export type DrawerStackParamList = {
	Home: undefined;
	PersonalityAnalysis: undefined;
	Profile: undefined;
};

export type DrawerStackScreenProps<Screen extends keyof DrawerStackParamList> = DrawerScreenProps<
	DrawerStackParamList,
	Screen
>;
