import { Dimensions, StyleSheet, View } from 'react-native';
import React, { useState } from 'react';
import AppText from './AppText';
import { DiscS } from '../../helpers/scoreHelper';
import { LineChart } from 'react-native-chart-kit';
import { ScrollView } from 'react-native-gesture-handler';
import { Table, Col, Row, Rows, TableWrapper } from 'react-native-reanimated-table';
import { Button } from 'react-native-paper';
import Seperator from './Seperator';
import { cStyle, dStyle, iStyle, sStyle } from '../../helpers/styleByStyleAnalysis';

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
	const max = Math.max(score.D, score.I, score.S, score.C);
	let desc = '';
	if (score.D === max) desc = dStyle.description;
	else if (score.I === max) desc = iStyle.description;
	else if (score.S === max) desc = sStyle.description;
	else if (score.C === max) desc = cStyle.description;

	return (
		<ScrollView>
			<AppText title>Results</AppText>
			<AppText>{desc}</AppText>
			<Table>
				<Row data={['Style Intensity']} style={styles.head} textStyle={styles.tableTitle} />
				<Row data={['Style', 'High', 'Low']} flexArr={[1, 2, 2]} style={styles.head} textStyle={styles.tableTitle} />
				<TableWrapper style={styles.wrapper}>
					<Col data={['D', 'I', 'S', 'C']} style={styles.title} textStyle={styles.tableTitle} />
					<Rows
						data={[
							['Decides for all', 'Decides Not to decide'],
							["You won't get a word IN", "You won't get a word OUT"],
							['No changes please', 'Will change in an instant'],
							['Lots of data - no conflict', "Don't bore me with the facts"],
						]}
						flexArr={[1, 1, 2]}
						style={styles.row}
						textStyle={styles.text}
					/>
				</TableWrapper>
			</Table>
			<AppText style={styles.text}>
				Use the following table with the 3 graphs below to identify your personality highs and lows.
			</AppText>
			<Seperator />
			<View style={styles.chart}>
				<AppText title>Mask, Public self</AppText>
				<AppText>How you are perceived in public</AppText>
				<LineChart
					data={mostData}
					width={screenWidth}
					height={220}
					chartConfig={chartConfig}
					verticalLabelRotation={30}
					bezier
				/>
				<AppText>Public Perception</AppText>
				<AppText>How one acts in response to the environment</AppText>
				<AppText>Behaviour expected by others</AppText>
				<AppText>This graph has the greatest potential for change</AppText>
			</View>
			<View style={styles.chart}>
				<AppText title>Core, Private self</AppText>
				<AppText>How you are in private</AppText>
				<LineChart
					data={leastData}
					width={screenWidth}
					height={220}
					chartConfig={chartConfig}
					verticalLabelRotation={30}
					bezier
				/>
				<AppText>Stress Perception</AppText>
				<AppText>Instinctive response to pressure</AppText>
				<AppText>Blind spot</AppText>
				<AppText>Instinctive responses are less likley to change</AppText>
			</View>
			<View style={styles.chart}>
				<AppText title>Mirror, Perceived self</AppText>
				<AppText>How you perceive yourself</AppText>
				<LineChart
					data={scoreData}
					width={screenWidth}
					height={220}
					chartConfig={chartConfig}
					verticalLabelRotation={30}
					bezier
				/>
				<AppText>Self Perception</AppText>
				<AppText>Displays the mental picture one has of themselves</AppText>
				<AppText>Self image or self identity</AppText>
				<AppText>
					Change in one's perception can occur, but it is usually gradual and based on the changing demands of one's
					envrionment
				</AppText>
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
