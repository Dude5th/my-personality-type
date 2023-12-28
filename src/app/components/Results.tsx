import { Dimensions, StyleSheet, View } from 'react-native';
import React from 'react';
import AppText from './AppText';
import { DiscS } from '../../helpers/scoreHelper';
import { LineChart } from 'react-native-chart-kit';
import { ScrollView } from 'react-native-gesture-handler';
import { Table, Col, Row, Rows, TableWrapper } from 'react-native-table-component';

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
		style: {
			borderRadius: 16,
		},
		propsForDots: {
			r: '6',
			strokeWidth: '2',
			stroke: '#ffa726',
		},
	};
	const mostData = {
		labels: ['D', 'I', 'S', 'C'],
		datasets: [
			{
				data: [most.D, most.S, most.I, most.C],
				color: (opacity = 1) => `rgba(0, 65, 244, ${opacity})`, // optional
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
				color: (opacity = 1) => `rgba(134, 65, 0, ${opacity})`, // optional
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
				color: (opacity = 1) => `rgba(134, 0, 244, ${opacity})`, // optional
				strokeWidth: 2, // optional
			},
		],
		legend: ['Change'], // optional
	};
	return (
		<ScrollView>
			<Table borderStyle={{ borderWidth: 0 }}>
				<Row
					data={['', 'D', 'I', 'S', 'C', 'Star']}
					flexArr={[1, 1, 1, 1, 1]}
					style={styles.head}
					textStyle={[styles.text, { fontWeight: 'bold' }]}
				/>
				<TableWrapper style={styles.wrapper}>
					<Col data={['MOST', 'LEAST', 'Change']} heightArr={[28, 28]} textStyle={styles.text} />
					<Rows
						data={[
							[most.D, most.I, most.S, most.C, most.Star],
							[least.D, least.I, least.S, least.C, least.Star],
							[score.D, score.I, score.S, score.C, ''],
						]}
						flexArr={[2, 1, 1, 1, 1, 1]}
						style={styles.tableRow}
						textStyle={styles.text}
					/>
				</TableWrapper>
			</Table>

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
	head: { height: 40, backgroundColor: '#f1f8ff' },
	wrapper: { flexDirection: 'row' },
	title: { flex: 1, backgroundColor: '#f6f8fa' },
	tableRow: { height: 28 },
	text: { textAlign: 'center' },
});
