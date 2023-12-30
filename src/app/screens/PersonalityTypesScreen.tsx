import { ScrollView, StyleSheet, View } from 'react-native';
import React, { useState } from 'react';
import AppText from '../components/AppText';
import AppScreen from '../components/AppScreen';
import AppButton from '../components/AppButton';
import { DiscEnum } from '../../enums/DiscEnum';
import BackButton from '../components/BackButton';
import { StyleByStyleAnalysis, cStyle, dStyle, iStyle, sStyle } from '../../helpers/styleByStyleAnalysis';
import NextButton from '../components/NextButton';

export default function PersonalityTypesScreen() {
	const [personalityTitle, setPersonalityTitle] = useState<string>('');
	const [personalityGroups, setPersonalityGroups] = useState<string[]>([]);
	const [personalityType, setPersonalityType] = useState<StyleByStyleAnalysis | undefined>();
	const [index, setIndex] = useState<number>(-1);

	const setType = (type?: DiscEnum) => {
		switch (type) {
			case DiscEnum.D:
				setPersonalityTitle('Outgoing & Task');
				setPersonalityGroups(['Disc: (D)ominance', 'Animal: Lion', 'Colour: Red']);
				setPersonalityType(dStyle);
				break;
			case DiscEnum.I:
				setPersonalityTitle('Outgoing & People');
				setPersonalityGroups(['Disc: (i)nfluence', 'Animal: Monkey', 'Colour: Yellow']);
				setPersonalityType(iStyle);
				break;
			case DiscEnum.S:
				setPersonalityTitle('Reserved & People');
				setPersonalityGroups(['Disc: (S)teadiness', 'Animal: Owl', 'Colour: Green']);
				setPersonalityType(sStyle);
				break;
			case DiscEnum.C:
				setPersonalityTitle('Reserved & Task');
				setPersonalityGroups(['Disc: (C)onscientiousness', 'Animal: Dolphin', 'Colour: Blue']);
				setPersonalityType(cStyle);
				break;
			default:
				setPersonalityTitle('');
				setPersonalityType(undefined);
		}
	};

	const onBack = () => {
		if (index < 0) {
			setPersonalityTitle('');
			return setPersonalityType(undefined);
		}

		return setIndex(-1);
	};

	return (
		<ScrollView>
			<AppScreen>
				{personalityType ? (
					<>
						<View style={{ flexDirection: 'row' }}>
							<AppText style={styles.mlr20} title>
								Personality Type:
							</AppText>
							<AppText>{personalityTitle}</AppText>
						</View>
						<View style={styles.mlr20}>
							{index < 0 && (
								<>
									{personalityGroups.map(group => (
										<AppText style={styles.mlr20} key={group}>
											{group}
										</AppText>
									))}
									<AppText style={styles.mlr20} title>
										Choose a type of style analysis:
									</AppText>
									<AppButton onPress={() => setIndex(0)}>General Characteristics</AppButton>
									<AppButton onPress={() => setIndex(1)}>Can be perceived as</AppButton>
									<AppButton onPress={() => setIndex(2)}>Occupational Characteristics</AppButton>
									<AppButton onPress={() => setIndex(3)}>Other</AppButton>
								</>
							)}
							{index === 0 && (
								<>
									<AppText style={styles.mt20} title>
										General Characteristics:
									</AppText>
									{personalityType.generalCharacteristics.map(item => (
										<AppText key={item}>{'\u2B24 ' + item}</AppText>
									))}
								</>
							)}
							{index === 1 && (
								<>
									<AppText style={styles.mt20} title>
										Can be perceived as:
									</AppText>
									{personalityType.canBePerceivedAs.map(item => (
										<AppText key={item}>{'\u2B24 ' + item}</AppText>
									))}
								</>
							)}
							{index === 2 && (
								<>
									<AppText style={styles.mt20} title>
										Occupational Characteristics:
									</AppText>
									{personalityType.occupationalCharacteristics.map(item => (
										<AppText key={item}>{'\u2B24 ' + item}</AppText>
									))}
								</>
							)}
							{index === 3 && (
								<>
									<AppText style={styles.mt20} title>
										Intensity:
									</AppText>
									{personalityType.intensity.map(item => (
										<AppText key={item}>{'\u2B24 ' + item}</AppText>
									))}
									<AppText style={styles.mt20} title>
										Antagonistic Environment:
									</AppText>
									{personalityType.antagonisticEnvironment.map(item => (
										<AppText key={item}>{'\u2B24 ' + item}</AppText>
									))}
									<AppText style={styles.mt20} title>
										Emotion:
									</AppText>
									{personalityType.emotion.map(item => (
										<AppText key={item}>{'\u2B24 ' + item}</AppText>
									))}
								</>
							)}
						</View>
						<View style={styles.controls}>
							<BackButton onPress={onBack} />
							<NextButton disabled={index === 3} onPress={() => setIndex(index + 1)} />
						</View>
					</>
				) : (
					<>
						<AppText style={styles.mlr20}>Choose a personality type that best describes you or someone else.</AppText>
						<View>
							<AppButton onPress={() => setType(DiscEnum.D)}>Outgoing & Task</AppButton>
							<AppButton onPress={() => setType(DiscEnum.I)}>Outgoing & People</AppButton>
							<AppButton onPress={() => setType(DiscEnum.S)}>Reserved & People</AppButton>
							<AppButton onPress={() => setType(DiscEnum.C)}>Reserved & Task</AppButton>
						</View>
					</>
				)}
			</AppScreen>
		</ScrollView>
	);
}

const styles = StyleSheet.create({
	mlr20: { marginLeft: 20, marginRight: 20 },
	mt20: { marginTop: 20 },
	controls: {
		marginTop: 20,
		flexDirection: 'row',
		justifyContent: 'space-evenly',
	},
});
