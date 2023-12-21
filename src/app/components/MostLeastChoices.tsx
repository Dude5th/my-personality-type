import { StyleSheet, View } from 'react-native';
import { RadioButton, Text } from 'react-native-paper';
import { IMostLeastQuestions } from '../../helpers/questions';
import { DiscEnum } from '../../enums/DiscEnum';
import AppText from './AppText';

type props = {
	number: number;
	data: IMostLeastQuestions[];
	most?: DiscEnum;
	least?: DiscEnum;
	onMostChange?: (most: DiscEnum) => void;
	onLeastChange?: (least: DiscEnum) => void;
};

export default function MostLeastChoices({ number, data, most, least, onMostChange, onLeastChange }: Readonly<props>) {
	return (
		<View style={styles.container}>
			<AppText title>{`Question ${number}/24`}</AppText>
			<Text style={styles.helper}>Please choose one from the Most column and one from the least column</Text>
			<View style={styles.questionContainer}>
				<View>
					<AppText title>Most</AppText>
					<RadioButton
						value={data[0].most.toString()}
						onPress={() => onMostChange?.(data[0].most)}
						status={most === data[0].most ? 'checked' : 'unchecked'}
					/>
					<RadioButton
						value={data[1].most.toString()}
						onPress={() => onMostChange?.(data[1].most)}
						status={most === data[1].most ? 'checked' : 'unchecked'}
					/>
					<RadioButton
						value={data[2].most.toString()}
						onPress={() => onMostChange?.(data[2].most)}
						status={most === data[2].most ? 'checked' : 'unchecked'}
					/>
					<RadioButton
						value={data[3].most.toString()}
						onPress={() => onMostChange?.(data[3].most)}
						status={most === data[3].most ? 'checked' : 'unchecked'}
					/>
				</View>
				<View>
					<AppText title>Least</AppText>
					<RadioButton
						value={data[0].least.toString()}
						onPress={() => onLeastChange?.(data[0].least)}
						status={least === data[0].least ? 'checked' : 'unchecked'}
					/>
					<RadioButton
						value={data[1].least.toString()}
						onPress={() => onLeastChange?.(data[1].least)}
						status={least === data[1].least ? 'checked' : 'unchecked'}
					/>
					<RadioButton
						value={data[2].least.toString()}
						onPress={() => onLeastChange?.(data[2].least)}
						status={least === data[2].least ? 'checked' : 'unchecked'}
					/>
					<RadioButton
						value={data[3].least.toString()}
						onPress={() => onLeastChange?.(data[3].least)}
						status={least === data[3].least ? 'checked' : 'unchecked'}
					/>
				</View>
				<View>
					<AppText title>Questions</AppText>
					<AppText>{data[0].question}</AppText>
					<AppText>{data[1].question}</AppText>
					<AppText>{data[2].question}</AppText>
					<AppText>{data[3].question}</AppText>
				</View>
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		justifyContent: 'space-around',
	},
	questionContainer: {
		flexDirection: 'row',
		justifyContent: 'space-around',
	},
	helper: {
		marginBottom: 10,
	},
});
