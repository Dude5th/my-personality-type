import { StyleSheet, View } from 'react-native';
import React, { useState } from 'react';
import MostLeastChoices from '../components/MostLeastChoices';
import questions from '../../helpers/questions';
import AppScreen from '../components/AppScreen';
import { DiscEnum } from '../../enums/DiscEnum';
import { Score, getScore } from '../../helpers/scoreHelper';
import Results from '../components/Results';
import BackButton from '../components/BackButton';
import NextButton from '../components/NextButton';

export default function PersonalityAnalysisScreen() {
	const [counter, setCounter] = useState<number>(1); // must be >= 1
	const [mostData, setMostData] = useState<DiscEnum[]>([]);
	const [leastData, setLeastData] = useState<DiscEnum[]>([]);
	const [score, setScore] = useState<Score | undefined>();
	// 	{
	// 	score: { D: 7, I: -3, S: -5, C: 0, Star: 0 },
	// 	mostScore: { D: 8, I: 2, S: 3, C: 5, Star: 6 },
	// 	leastScore: { D: 1, I: 5, S: 8, C: 5, Star: 5 },
	// }

	const onMostChange = (most: DiscEnum) => {
		if (mostData.length < counter) {
			setMostData([...mostData, most]);
		} else {
			setMostData([...mostData.slice(0, counter - 1), most]);
		}
	};

	const onLeastChange = (least: DiscEnum) => {
		if (leastData.length < counter) {
			setLeastData([...leastData, least]);
		} else {
			setLeastData([...leastData.slice(0, counter - 1), least]);
		}
	};

	const OnNext = () => {
		if (counter < questions.length + 1) {
			setCounter(counter + 1);
			if (counter < questions.length) {
				const score = getScore(mostData, leastData);
				setScore(score);
			}
		}
	};

	return (
		<AppScreen>
			<View>
				{counter >= questions.length + 1 && score ? (
					<Results score={score.score} most={score.mostScore} least={score.leastScore} />
				) : (
					<MostLeastChoices
						most={mostData[counter - 1]}
						least={leastData[counter - 1]}
						number={counter}
						data={questions[counter - 1]}
						onMostChange={onMostChange}
						onLeastChange={onLeastChange}
					/>
				)}

				<View style={styles.controls}>
					<BackButton disabled={counter === 1} onPress={() => setCounter(counter - 1)} />
					<NextButton onPress={OnNext} />
				</View>
			</View>
		</AppScreen>
	);
}

const styles = StyleSheet.create({
	controls: {
		marginTop: 20,
		flexDirection: 'row',
		justifyContent: 'space-evenly',
	},
});
