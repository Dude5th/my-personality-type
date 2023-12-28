import { StyleSheet, View } from 'react-native';
import React, { useState } from 'react';
import AppScreen from '../components/AppScreen';
import AppText from '../components/AppText';
import { Button } from 'react-native-paper';
import { DiscEnum } from '../../enums/DiscEnum';
import AppButton from '../components/AppButton';
import { ParamListBase, useNavigation } from '@react-navigation/native';
import { DrawerNavigationProp } from '@react-navigation/drawer';

export default function HomeScreen() {
	const navigation = useNavigation<DrawerNavigationProp<ParamListBase>>();
	const [outgoing, setOutgoing] = useState<boolean | undefined>();
	const [task, setTask] = useState<boolean | undefined>();
	function GetDisc() {
		if (outgoing && task) return DiscEnum.D;
		if (outgoing && !task) return DiscEnum.I;
		if (!outgoing && !task) return DiscEnum.S;
		if (!outgoing && task) return DiscEnum.C;
		return '';
	}

	function Score() {
		const score = GetDisc();
		switch (score) {
			case DiscEnum.D:
				return 'D 	= Outgoing + Task';
			case DiscEnum.I:
				return 'I 	= Outgoing + People';
			case DiscEnum.S:
				return 'S 	= Reserved + People';
			case DiscEnum.C:
				return 'C 	= Reserved + Task';
			default:
				return '';
		}
	}

	function getFears() {
		const score = GetDisc();
		switch (score) {
			case DiscEnum.D:
				return ['Fear 1: Being taken advantage of', 'Fear 2: Failure'];
			case DiscEnum.I:
				return ['Fear 1: Rejection', 'Fear 2: Loss of popularity'];
			case DiscEnum.S:
				return ['Fear 1: Loss of security', 'Fear 2: change'];
			case DiscEnum.C:
				return ['Fear 1: Criticism', 'Fear 2: Conflict'];
			default:
				return [];
		}
	}

	function getManagementStyle() {
		const score = GetDisc();
		switch (score) {
			case DiscEnum.D:
				return ['Style 1: Force of character', 'Style 2: "Do It!"'];
			case DiscEnum.I:
				return ['Style 1: Verbal persuasion', 'Style 2: "You can do it"'];
			case DiscEnum.S:
				return ['Style 1: Slow down', 'Style 2: "We can do it"'];
			case DiscEnum.C:
				return ['Style 1: Information', `Style 2: "Let's do it right"`];
			default:
				return [];
		}
	}

	function getPersonalityGoals() {
		const score = GetDisc();
		switch (score) {
			case DiscEnum.D:
				return 'Have Control';
			case DiscEnum.I:
				return 'Have fun';
			case DiscEnum.S:
				return 'have security';
			case DiscEnum.C:
				return 'Have perfection';
			default:
				return '';
		}
	}

	const Summary = (
		<>
			<AppText style={styles.subTitle}>You have chosen:</AppText>
			<AppText style={styles.text}>{Score()}</AppText>

			<AppText style={styles.subTitle}>Greatest Fears</AppText>
			{getFears().map(fear => (
				<AppText key={fear} style={styles.text}>
					{fear}
				</AppText>
			))}

			<AppText style={styles.subTitle}>Management style</AppText>
			{getManagementStyle().map(mgSt => (
				<AppText key={mgSt} style={styles.text}>
					{mgSt}
				</AppText>
			))}

			<AppText style={styles.subTitle}>Personality goals</AppText>
			<AppText style={styles.text}>{getPersonalityGoals()}</AppText>
			<AppButton onPress={() => navigation.navigate('PersonalityAnalysis')}>Get more information</AppButton>
			<Button style={{}} onPress={() => setTask(undefined)}>
				Back
			</Button>
		</>
	);
	const ReservedFinalChoice =
		task === undefined ? (
			<>
				<AppText style={styles.text}>What Behavioural Model are you?</AppText>
				<AppButton onPress={() => setTask(true)}>Task Orientated</AppButton>
				<AppButton onPress={() => setTask(false)}>People Orientated</AppButton>
				<Button style={{}} onPress={() => setOutgoing(undefined)}>
					Back
				</Button>
			</>
		) : (
			Summary
		);
	return (
		<AppScreen>
			<View style={styles.container}>
				<AppText style={styles.title} title>
					DISC: People Power
				</AppText>

				{outgoing === undefined ? (
					<>
						<AppText style={styles.text}>What Behavioural Model are you?</AppText>
						<AppButton onPress={() => setOutgoing(true)}>Outgoing</AppButton>
						<AppButton onPress={() => setOutgoing(false)}>Reserved</AppButton>
					</>
				) : (
					ReservedFinalChoice
				)}
			</View>
		</AppScreen>
	);
}

const styles = StyleSheet.create({
	container: { flex: 1 },
	title: { textAlign: 'center', fontSize: 25 },
	text: { textAlign: 'center' },
	subTitle: { textAlign: 'center', fontWeight: 'bold', padding: 20 },
});
