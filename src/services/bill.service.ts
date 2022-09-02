import { Unsubscribe } from 'firebase/auth';
import { doc, DocumentData, DocumentSnapshot, onSnapshot } from 'firebase/firestore';
import { BehaviorSubject } from 'rxjs';
import { BillDataType } from '../types/@';
import { FirebaseService, FirestoreService } from './@';

// define service
class BillService {
	constructor(
		private snapshot: Unsubscribe = () => {},
		private subject$ = new BehaviorSubject<BillDataType | null>(null),
	) {}

	subscribeOn = (document: string) => {
		this.unsubscribe();
		this.snapshot = onSnapshot(this.register(document), this.callback);

		return this.subject$;
	};

	unsubscribe = () => {
		this.snapshot();
	};

	private register = (document: string) => {
		return doc(FirebaseService.Firestore, FirestoreService.Bill, document);
	};

	private callback = (snapshot: DocumentSnapshot<DocumentData>) => {
		this.subject$.next((snapshot.data() as BillDataType) || null);
	};
}

// export service
export default new BillService();
