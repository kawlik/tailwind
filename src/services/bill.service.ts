import { doc, DocumentData, DocumentSnapshot, onSnapshot } from 'firebase/firestore';
import { BehaviorSubject } from 'rxjs';
import { BillType } from '../types/@';
import { FirebaseService, FirestoreService } from './@';

// define service
class Service {
	constructor(readonly data$ = new BehaviorSubject<BillType | null>(null)) {}

	unregister(document: string) {
		return onSnapshot(this.register(document), this.callback);
	}

	private register = (document: string) => {
		return doc(FirebaseService.Firestore, FirestoreService.Bill, document);
	};

	private callback = (snapshot: DocumentSnapshot<DocumentData>) => {
		this.data$.next((snapshot.data() as BillType) || null);
	};
}

// export service
export default new Service();
