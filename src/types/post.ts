import { Timestamp } from 'firebase/firestore';

export default interface Interface {
	payload: string;
	timestamp: Timestamp;
	type: string;
	user: string;
}
