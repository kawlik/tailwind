import { doc, DocumentSnapshot } from 'firebase/firestore';
import { BehaviorSubject } from 'rxjs';
import { BillDataType } from '../types/@';
import { FirebaseService, FirestoreService } from './@';
import { FirestoreDocument } from './common/@';

// define service
class BillService<T> extends FirestoreDocument<T> {
	constructor(feed: T) {
		super(new BehaviorSubject<T>(feed));
	}

	override register = (document: string) => {
		return doc(FirebaseService.Firestore, FirestoreService.Bill, document);
	};

	override callback = (snapshot: DocumentSnapshot) => {
		const payload = snapshot.data();

		this.subject$.next(payload as T);
	};
}

// export service
export default new BillService<BillDataType | null>(null);
