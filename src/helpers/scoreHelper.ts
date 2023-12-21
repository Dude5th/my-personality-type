import { DiscEnum } from '../enums/DiscEnum';

export interface DiscS {
	D: number;
	I: number;
	S: number;
	C: number;
	Star: number;
}
export interface Score {
	score: DiscS;
	mostScore: DiscS;
	leastScore: DiscS;
}

const getMostScore = (mostData: DiscEnum[]) => {
	let mostScore: DiscS = {
		D: 0,
		I: 0,
		S: 0,
		C: 0,
		Star: 0,
	};
	mostData.forEach(element => {
		if (element === DiscEnum.D) mostScore.D++;
		if (element === DiscEnum.I) mostScore.I++;
		if (element === DiscEnum.S) mostScore.S++;
		if (element === DiscEnum.C) mostScore.C++;
		if (element === DiscEnum.Star || element === DiscEnum.Star2) mostScore.Star++;
	});
	return mostScore;
};
const getLeastScore = (leastData: DiscEnum[]) => {
	let leastScore: DiscS = {
		D: 0,
		I: 0,
		S: 0,
		C: 0,
		Star: 0,
	};
	leastData.forEach(element => {
		if (element === DiscEnum.D) leastScore.D++;
		if (element === DiscEnum.I) leastScore.I++;
		if (element === DiscEnum.S) leastScore.S++;
		if (element === DiscEnum.C) leastScore.C++;
		if (element === DiscEnum.Star || element === DiscEnum.Star2) leastScore.Star++;
	});
	return leastScore;
};
export const getScore = (mostData: DiscEnum[], leastData: DiscEnum[]) => {
	const mostScore = getMostScore(mostData);
	const leastScore = getLeastScore(leastData);
	let score: DiscS = {
		D: mostScore.D - leastScore.D,
		I: mostScore.I - leastScore.I,
		S: mostScore.S - leastScore.S,
		C: mostScore.C - leastScore.C,
		Star: 0,
	};
	return {
		score,
		mostScore,
		leastScore,
	};
};
