import { Timestamp } from 'firebase/firestore';

export default interface BillInfo {
	id: string;
	participants: string[];
	timestamp: Timestamp;
	title: string;
}
