import { Timestamp } from 'firebase/firestore';

export default interface BillInfo {
	id?: string;
	participants: string[];
	timestampClosed?: Timestamp;
	timestampCreated: Timestamp;
	timestampUpdated: Timestamp;
	title: string;
}
