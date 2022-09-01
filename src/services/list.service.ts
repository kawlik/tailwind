import {
	collection,
	DocumentData,
	onSnapshot,
	query,
	QuerySnapshot,
	where,
} from 'firebase/firestore';
import { BehaviorSubject } from 'rxjs';
import { ListType } from '../types/@';
import { FirebaseService, FirestoreService } from './@';

// define service
class Service {
	constructor(readonly data$ = new BehaviorSubject<ListType[]>([])) {}

	unregister(document: string) {
		return onSnapshot(query(this.register(document)), this.callback);
	}

	private register = (document: string) => {
		return query(
			collection(FirebaseService.Firestore, FirestoreService.List),
			where('participants', 'array-contains', document),
		);
	};

	private callback = (snapshot: QuerySnapshot<DocumentData>) => {
		this.data$.next(
			snapshot.docs.map((doc) => ({
				...doc.data(),
				id: doc.id,
			})) as ListType[],
		);
	};
}

// export service
export default new Service();
