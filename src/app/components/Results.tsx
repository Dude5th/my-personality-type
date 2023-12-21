import { Dimensions, StyleSheet, View } from 'react-native';
import React from 'react';
import AppText from './AppText';
import { DiscS } from '../../helpers/scoreHelper';
import { LineChart } from 'react-native-chart-kit';
import { ScrollView } from 'react-native-gesture-handler';

export default function Results({ score, most, least }: Readonly<{ most: DiscS; least: DiscS; score: DiscS }>) {
	const screenWidth = Dimensions.get('window').width - 20;
	const chartConfig = {
		backgroundGradientFrom: '#ADADDD',
		backgroundGradientFromOpacity: 0.5,
		backgroundGradientTo: '#ADADDD',
		backgroundGradientToOpacity: 0.5,
		color: (opacity = 1) => `rgba(255, 0, 255, ${opacity})`,
		strokeWidth: 2, // optional, default 3
		barPercentage: 0.5,
		useShadowColorFromDataset: false, // optional
	};
	const mostData = {
		labels: ['D', 'I', 'S', 'C'],
		datasets: [
			{
				data: [most.D, most.S, most.I, most.C],
				color: (opacity = 1) => `rgba(134, 65, 244, ${opacity})`, // optional
				strokeWidth: 2, // optional
			},
		],
		legend: ['Most'], // optional
	};
	const leastData = {
		labels: ['D', 'I', 'S', 'C'],
		datasets: [
			{
				data: [least.D, least.S, least.I, least.C],
				color: (opacity = 1) => `rgba(134, 65, 244, ${opacity})`, // optional
				strokeWidth: 2, // optional
			},
		],
		legend: ['Least'], // optional
	};
	const scoreData = {
		labels: ['D', 'I', 'S', 'C'],
		datasets: [
			{
				data: [score.D, score.S, score.I, score.C],
				color: (opacity = 1) => `rgba(134, 65, 244, ${opacity})`, // optional
				strokeWidth: 2, // optional
			},
		],
		legend: ['Change'], // optional
	};
	return (
		<ScrollView>
			<View style={{ flexDirection: 'row', justifyContent: 'flex-end' }}>
				<AppText title>{` D    I    S    C   Star`}</AppText>
			</View>
			<View style={styles.row}>
				<AppText title>{`MOST:  `}</AppText>
				<AppText>{`${most.D}   ${most.I}    ${most.S}    ${most.C}   ${most.Star}`}</AppText>
			</View>
			<View style={styles.row}>
				<AppText title>{`LEAST:  `}</AppText>
				<AppText>{`${least.D}   ${least.I}    ${least.S}    ${least.C}   ${least.Star}`}</AppText>
			</View>
			<View style={styles.row}>
				<AppText title>{`Change:  `}</AppText>
				<AppText>{`${score.D}  ${score.I}   ${score.S}    ${score.C}     `}</AppText>
			</View>

			<View style={styles.chart}>
				<AppText title>Mask, Public self</AppText>
				<LineChart
					data={mostData}
					width={screenWidth}
					height={220}
					chartConfig={chartConfig}
					verticalLabelRotation={30}
					bezier
				/>
			</View>
			<View style={styles.chart}>
				<AppText title>Core, Private self</AppText>
				<LineChart
					data={leastData}
					width={screenWidth}
					height={220}
					chartConfig={chartConfig}
					verticalLabelRotation={30}
					bezier
				/>
			</View>
			<View style={styles.chart}>
				<AppText title>Mirror, Perceived self</AppText>
				<LineChart
					data={scoreData}
					width={screenWidth}
					height={220}
					chartConfig={chartConfig}
					verticalLabelRotation={30}
					bezier
				/>
			</View>
		</ScrollView>
	);
}

const styles = StyleSheet.create({
	row: {
		flexDirection: 'row',
		padding: 10,
		justifyContent: 'flex-end',
		marginRight: 15,
	},
	chart: { marginTop: 20 },
});
