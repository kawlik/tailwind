import { Timestamp } from 'firebase/firestore';

export default interface BillInfo {
	id: string;
	participants: string[];
	timestampCreated: Timestamp;
	timestampClosed?: Timestamp;
	timestampUpdate?: Timestamp;
	title: string;
}
