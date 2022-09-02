import { Timestamp } from 'firebase/firestore';

export default interface BillPost {
	payload: string;
	timestamp: Timestamp;
	type: string;
	user: string;
}
