import { collection, query, QuerySnapshot, where } from 'firebase/firestore';
import { BehaviorSubject } from 'rxjs';
import { BillInfoType } from '../types/@';
import { FirebaseService, FirestoreService } from './@';
import { FirestoreQuery } from './common/@';

// define service
class ListService<T> extends FirestoreQuery<T> {
	readonly bill$ = new BehaviorSubject<BillInfoType | null>(null);

	constructor(feed: T) {
		super(new BehaviorSubject<T>(feed));
	}

	override register = (document: string) => {
		return query(
			collection(FirebaseService.Firestore, FirestoreService.List),
			where('participants', 'array-contains', document),
		);
	};

	override callback = (snapshot: QuerySnapshot) => {
		const payload = snapshot.docs.map((doc) => ({
			...doc.data(),
			id: doc.id,
		}));

		this.subject$.next(payload as T);
	};
}

// export service
export default new ListService<BillInfoType[]>([]);
