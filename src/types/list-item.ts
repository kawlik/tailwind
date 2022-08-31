import { Timestamp } from 'firebase/firestore';

export default interface Interface {
	id: string;
	participants: string[];
	timestamp: Timestamp;
	title: string;
}
