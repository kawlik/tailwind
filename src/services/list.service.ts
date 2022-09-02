import { Unsubscribe } from 'firebase/auth';
import {
	collection,
	DocumentData,
	onSnapshot,
	query,
	QuerySnapshot,
	where,
} from 'firebase/firestore';
import { BehaviorSubject } from 'rxjs';
import { BillInfoType } from '../types/@';
import { FirebaseService, FirestoreService } from './@';

// define service
class ListService {
	constructor(
		private snapshot: Unsubscribe = () => {},
		private subject$ = new BehaviorSubject<BillInfoType[]>([]),
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
		return query(
			collection(FirebaseService.Firestore, FirestoreService.List),
			where('participants', 'array-contains', document),
		);
	};

	private callback = (snapshot: QuerySnapshot<DocumentData>) => {
		const data = snapshot.docs.map((doc) => ({
			...doc.data(),
			id: doc.id,
		}));

		this.subject$.next(data as BillInfoType[]);
	};
}

// export service
export default new ListService();
