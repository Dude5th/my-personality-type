import { Dimensions, StyleSheet, View } from 'react-native';
import React, { useState } from 'react';
import AppText from './AppText';
import { DiscS } from '../../helpers/scoreHelper';
import { LineChart } from 'react-native-chart-kit';
import { ScrollView } from 'react-native-gesture-handler';
import { Table, Col, Row, Rows, TableWrapper } from 'react-native-reanimated-table';
import { Button } from 'react-native-paper';

export default function Results({ score, most, least }: Readonly<{ most: DiscS; least: DiscS; score: DiscS }>) {
	const screenWidth = Dimensions.get('window').width - 20;
	const [showTable, setShowTable] = useState<boolean>(false);
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
	const state = {
		tableHead: ['', 'D', 'I', 'S', 'C', 'Star'],
		tableTitle: ['MOST', 'LEAST', 'Change'],
		tableData: [
			[most.D.toString(), most.I.toString(), most.S.toString(), most.C.toString(), most.Star.toString()],
			[least.D.toString(), least.I.toString(), least.S.toString(), least.C.toString(), least.Star.toString()],
			[score.D.toString(), score.I.toString(), score.S.toString(), score.C.toString(), ''],
		],
	};
	return (
		<ScrollView>
			<AppText title>Results</AppText>

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
			<View style={{ marginBottom: 20 }}>
				{showTable && (
					<Table>
						<Row data={state.tableHead} flexArr={[1.8]} style={styles.head} textStyle={styles.tableTitle} />
						<TableWrapper style={styles.wrapper}>
							<Col data={state.tableTitle} style={styles.title} textStyle={styles.tableTitle} />
							<Rows data={state.tableData} flexArr={[1, 1, 1]} style={styles.row} textStyle={styles.text} />
						</TableWrapper>
					</Table>
				)}
				<Button onPress={() => setShowTable(!showTable)}>{showTable ? 'Hide Table' : 'Show Results'}</Button>
			</View>
		</ScrollView>
	);
}

const styles = StyleSheet.create({
	tableTitle: { fontWeight: 'bold', textAlign: 'center' },
	row: {
		flexDirection: 'row',
		padding: 10,
		justifyContent: 'flex-end',
	},
	chart: { marginTop: 20 },
	head: { height: 40, backgroundColor: '#f1f8ff' },
	wrapper: { flexDirection: 'row' },
	title: { flex: 1, backgroundColor: '#f6f8fa' },
	tableRow: { height: 28 },
	text: { textAlign: 'center' },
});
