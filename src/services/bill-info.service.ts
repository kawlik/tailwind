import {
	addDoc,
	collection,
	doc,
	DocumentReference,
	DocumentSnapshot,
} from 'firebase/firestore';
import { BehaviorSubject } from 'rxjs';
import { BillInfoType } from '../types/@';
import { FirebaseService, FirestoreService } from './@';
import { FirestoreDocument } from './utils/@';

// define service
class BillInfoService<T> extends FirestoreDocument<T> {
	constructor(feed: T) {
		super(new BehaviorSubject<T>(feed));
	}

	override register = (document: string): DocumentReference => {
		return doc(FirebaseService.Firestore, FirestoreService.BillInfo, document);
	};

	override callback = (snapshot: DocumentSnapshot): void => {
		const payload = snapshot.data();

		this.subject$.next(payload as T);
	};
}

// export service
export default new BillInfoService<BillInfoType | null>(null);
