import { DiscEnum } from '../enums/DiscEnum';

export interface IMostLeastQuestions {
	question: string;
	most: DiscEnum;
	least: DiscEnum;
}

const Block1: IMostLeastQuestions[] = [
	{
		most: DiscEnum.S,
		least: DiscEnum.S,
		question: 'Easy-going, Agreeable',
	},
	{
		most: DiscEnum.I,
		least: DiscEnum.I,
		question: 'Trusting, Believing in others',
	},
	{
		most: DiscEnum.Star,
		least: DiscEnum.D,
		question: 'Adventurous, Risk taker',
	},
	{
		most: DiscEnum.C,
		least: DiscEnum.C,
		question: 'Tolerant, Respectful',
	},
];

const Block2: IMostLeastQuestions[] = [
	{
		most: DiscEnum.C,
		least: DiscEnum.Star,
		question: 'Soft spoken, Reserved',
	},
	{
		most: DiscEnum.D,
		least: DiscEnum.D,
		question: 'Optimistic, Visionary',
	},
	{
		most: DiscEnum.Star,
		least: DiscEnum.I,
		question: 'Center of attention, Sociable',
	},
	{
		most: DiscEnum.S,
		least: DiscEnum.S,
		question: 'Peacemaker, Bring harmony',
	},
];

const Block3: IMostLeastQuestions[] = [
	{
		most: DiscEnum.I,
		least: DiscEnum.I,
		question: 'Encourage others',
	},
	{
		most: DiscEnum.Star,
		least: DiscEnum.C,
		question: 'Strive for perfection',
	},
	{
		most: DiscEnum.Star2,
		least: DiscEnum.S,
		question: 'Be part of the team',
	},
	{
		most: DiscEnum.D,
		least: DiscEnum.Star,
		question: 'Want to establish goals',
	},
];

const Block4: IMostLeastQuestions[] = [
	{
		most: DiscEnum.C,
		least: DiscEnum.C,
		question: 'Become frustrated',
	},
	{
		most: DiscEnum.S,
		least: DiscEnum.S,
		question: 'Keep my feelings inside',
	},
	{
		most: DiscEnum.Star,
		least: DiscEnum.I,
		question: 'Tell my side of the story',
	},
	{
		most: DiscEnum.D,
		least: DiscEnum.D,
		question: 'Stand up to opposition',
	},
];

const Block5: IMostLeastQuestions[] = [
	{
		most: DiscEnum.I,
		least: DiscEnum.Star,
		question: 'Lively, Talkative',
	},
	{
		most: DiscEnum.D,
		least: DiscEnum.D,
		question: 'Fast paced, Determined',
	},
	{
		most: DiscEnum.S,
		least: DiscEnum.S,
		question: 'Try to maintain balance',
	},
	{
		most: DiscEnum.Star,
		least: DiscEnum.C,
		question: 'Try to follow the rules',
	},
];

const Block6: IMostLeastQuestions[] = [
	{
		most: DiscEnum.C,
		least: DiscEnum.Star,
		question: 'Manage time efficiently',
	},
	{
		most: DiscEnum.D,
		least: DiscEnum.D,
		question: 'Often rushed, Feel pressured',
	},
	{
		most: DiscEnum.I,
		least: DiscEnum.I,
		question: 'Social things are important',
	},
	{
		most: DiscEnum.S,
		least: DiscEnum.S,
		question: 'Like to finish what I start',
	},
];

const Block7: IMostLeastQuestions[] = [
	{
		most: DiscEnum.S,
		least: DiscEnum.Star,
		question: 'Resist sudden change',
	},
	{
		most: DiscEnum.I,
		least: DiscEnum.I,
		question: 'Tend to over promise',
	},
	{
		most: DiscEnum.Star,
		least: DiscEnum.C,
		question: 'Withdraw under pressure',
	},
	{
		most: DiscEnum.Star2,
		least: DiscEnum.D,
		question: 'Not afraid to fight',
	},
];

const Block8: IMostLeastQuestions[] = [
	{
		most: DiscEnum.I,
		least: DiscEnum.I,
		question: 'A good encourager',
	},
	{
		most: DiscEnum.S,
		least: DiscEnum.S,
		question: 'A good listener',
	},
	{
		most: DiscEnum.C,
		least: DiscEnum.C,
		question: 'A good analyzer',
	},
	{
		most: DiscEnum.D,
		least: DiscEnum.D,
		question: 'A good delegator',
	},
];

const Block9: IMostLeastQuestions[] = [
	{
		most: DiscEnum.D,
		least: DiscEnum.D,
		question: 'Results are what matter',
	},
	{
		most: DiscEnum.C,
		least: DiscEnum.C,
		question: 'Do it right, Accuracy counts',
	},
	{
		most: DiscEnum.Star,
		least: DiscEnum.I,
		question: 'Make it enjoyable',
	},
	{
		most: DiscEnum.Star2,
		least: DiscEnum.S,
		question: "Let's do it together",
	},
];

const Block10: IMostLeastQuestions[] = [
	{
		most: DiscEnum.Star,
		least: DiscEnum.C,
		question: 'Will do without, Self-controlled',
	},
	{
		most: DiscEnum.D,
		least: DiscEnum.D,
		question: 'Will buy on impulse',
	},
	{
		most: DiscEnum.S,
		least: DiscEnum.S,
		question: 'Will wait, No pressure',
	},
	{
		most: DiscEnum.I,
		least: DiscEnum.Star,
		question: 'Will spend on what I want',
	},
];

const Block11: IMostLeastQuestions[] = [
	{
		most: DiscEnum.S,
		least: DiscEnum.Star,
		question: 'Friendly, Easy to be with',
	},
	{
		most: DiscEnum.Star,
		least: DiscEnum.I,
		question: 'Unique, Bored by routine',
	},
	{
		most: DiscEnum.D,
		least: DiscEnum.D,
		question: 'Actively change things',
	},
	{
		most: DiscEnum.C,
		least: DiscEnum.C,
		question: 'Want things exact',
	},
];

const Block12: IMostLeastQuestions[] = [
	{
		most: DiscEnum.Star,
		least: DiscEnum.S,
		question: 'Non-confrontational, Giving in',
	},
	{
		most: DiscEnum.C,
		least: DiscEnum.Star,
		question: 'Overloaded with details',
	},
	{
		most: DiscEnum.I,
		least: DiscEnum.I,
		question: 'Changes at the last minute',
	},
	{
		most: DiscEnum.D,
		least: DiscEnum.D,
		question: 'Demanding, Abrupt',
	},
];

const Block13: IMostLeastQuestions[] = [
	{
		most: DiscEnum.D,
		least: DiscEnum.D,
		question: 'Want advancement',
	},
	{
		most: DiscEnum.S,
		least: DiscEnum.Star,
		question: 'Satisfied with things, Content',
	},
	{
		most: DiscEnum.I,
		least: DiscEnum.Star2,
		question: 'Openly display feelings',
	},
	{
		most: DiscEnum.Star,
		least: DiscEnum.C,
		question: 'Humble, Modest',
	},
];

const Block14: IMostLeastQuestions[] = [
	{
		most: DiscEnum.C,
		least: DiscEnum.C,
		question: 'Cool, Reserved',
	},
	{
		most: DiscEnum.I,
		least: DiscEnum.I,
		question: 'Happy, Carefree',
	},
	{
		most: DiscEnum.S,
		least: DiscEnum.Star,
		question: 'Pleasing, Kind',
	},
	{
		most: DiscEnum.D,
		least: DiscEnum.D,
		question: 'Bold, Daring',
	},
];

const Block15: IMostLeastQuestions[] = [
	{
		most: DiscEnum.S,
		least: DiscEnum.S,
		question: 'Spend quality time with others',
	},
	{
		most: DiscEnum.C,
		least: DiscEnum.Star,
		question: 'Plan for the future, Be prepared',
	},
	{
		most: DiscEnum.I,
		least: DiscEnum.I,
		question: 'Travel to new adventures',
	},
	{
		most: DiscEnum.D,
		least: DiscEnum.D,
		question: 'Receive rewards for goals met',
	},
];

const Block16: IMostLeastQuestions[] = [
	{
		most: DiscEnum.Star,
		least: DiscEnum.D,
		question: 'Rules need to be challenged',
	},
	{
		most: DiscEnum.C,
		least: DiscEnum.Star,
		question: 'Rules make it fair',
	},
	{
		most: DiscEnum.I,
		least: DiscEnum.I,
		question: 'Rules make it boring',
	},
	{
		most: DiscEnum.S,
		least: DiscEnum.S,
		question: 'Rules make it safe',
	},
];

const Block17: IMostLeastQuestions[] = [
	{
		most: DiscEnum.Star,
		least: DiscEnum.C,
		question: 'Education, Culture',
	},
	{
		most: DiscEnum.D,
		least: DiscEnum.D,
		question: 'Achievements, Awards',
	},
	{
		most: DiscEnum.S,
		least: DiscEnum.S,
		question: 'Safety, Security',
	},
	{
		most: DiscEnum.I,
		least: DiscEnum.Star,
		question: 'Social, Group Gatherings',
	},
];

const Block18: IMostLeastQuestions[] = [
	{
		most: DiscEnum.D,
		least: DiscEnum.D,
		question: 'Take charge, Direct approach',
	},
	{
		most: DiscEnum.Star,
		least: DiscEnum.I,
		question: 'Outgoing, Enthusiastic',
	},
	{
		most: DiscEnum.Star2,
		least: DiscEnum.S,
		question: 'Predictable, Consistent',
	},
	{
		most: DiscEnum.C,
		least: DiscEnum.Star,
		question: 'Cautious, Careful',
	},
];

const Block19: IMostLeastQuestions[] = [
	{
		most: DiscEnum.D,
		least: DiscEnum.D,
		question: 'Not easily defeated',
	},
	{
		most: DiscEnum.S,
		least: DiscEnum.Star,
		question: 'Will do as told, Follows leader',
	},
	{
		most: DiscEnum.I,
		least: DiscEnum.I,
		question: 'Excitable, Cheerful',
	},
	{
		most: DiscEnum.Star,
		least: DiscEnum.C,
		question: 'Want things orderly, Neat',
	},
];

const Block20: IMostLeastQuestions[] = [
	{
		most: DiscEnum.D,
		least: DiscEnum.Star,
		question: 'I will lead them',
	},
	{
		most: DiscEnum.S,
		least: DiscEnum.S,
		question: 'I will follow through',
	},
	{
		most: DiscEnum.I,
		least: DiscEnum.I,
		question: 'I will persuade them',
	},
	{
		most: DiscEnum.C,
		least: DiscEnum.Star,
		question: 'I will get the facts',
	},
];

const Block21: IMostLeastQuestions[] = [
	{
		most: DiscEnum.S,
		least: DiscEnum.S,
		question: 'Think of others first',
	},
	{
		most: DiscEnum.D,
		least: DiscEnum.D,
		question: 'Competitive, Like a challenge',
	},
	{
		most: DiscEnum.I,
		least: DiscEnum.I,
		question: 'Optimistic, Positive',
	},
	{
		most: DiscEnum.Star,
		least: DiscEnum.C,
		question: 'Logical thinker, Systematic',
	},
];

const Block22: IMostLeastQuestions[] = [
	{
		most: DiscEnum.S,
		least: DiscEnum.S,
		question: 'Please others, Agreeable',
	},
	{
		most: DiscEnum.Star,
		least: DiscEnum.I,
		question: 'Laugh out loud, Animated',
	},
	{
		most: DiscEnum.D,
		least: DiscEnum.D,
		question: 'Courageous, Bold',
	},
	{
		most: DiscEnum.C,
		least: DiscEnum.C,
		question: 'Quiet, Reserved',
	},
];

const Block23: IMostLeastQuestions[] = [
	{
		most: DiscEnum.Star,
		least: DiscEnum.D,
		question: 'Want more authority',
	},
	{
		most: DiscEnum.I,
		least: DiscEnum.Star,
		question: 'Want new opportunities',
	},
	{
		most: DiscEnum.S,
		least: DiscEnum.S,
		question: 'Avoid any conflict',
	},
	{
		most: DiscEnum.Star2,
		least: DiscEnum.C,
		question: 'Want clear directions',
	},
];

const Block24: IMostLeastQuestions[] = [
	{
		most: DiscEnum.Star,
		least: DiscEnum.S,
		question: 'Reliable, Dependable',
	},
	{
		most: DiscEnum.I,
		least: DiscEnum.I,
		question: 'Creative, Unique',
	},
	{
		most: DiscEnum.D,
		least: DiscEnum.Star,
		question: 'Bottom line, Results oriented',
	},
	{
		most: DiscEnum.C,
		least: DiscEnum.Star2,
		question: 'Hold high standards, Accurate',
	},
];

const questions = [
	Block1,
	Block2,
	Block3,
	Block4,
	Block5,
	Block6,
	Block7,
	Block8,
	Block9,
	Block10,
	Block11,
	Block12,
	Block13,
	Block14,
	Block15,
	Block16,
	Block17,
	Block18,
	Block19,
	Block20,
	Block21,
	Block22,
	Block23,
	Block24,
];

export default questions;
