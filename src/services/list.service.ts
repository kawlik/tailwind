import { collection, DocumentData, onSnapshot, query, QuerySnapshot, where } from 'firebase/firestore';
import { BehaviorSubject } from 'rxjs';
import { ListItemType } from '../types/@';
import { FirebaseService } from './@';

// define service
class Service {
	private readonly collection = collection(FirebaseService.Firestore, 'list');

	constructor(readonly list$ = new BehaviorSubject<ListItemType[]>([])) {
		onSnapshot(query(this.collection, where('participants', 'array-contains', 'User 1')), (snapshot) => {
			const list = this.parse(snapshot);

			this.list$.next(list);
		});
	}

	private parse(snapshot: QuerySnapshot<DocumentData>): ListItemType[] {
		return snapshot.docs.map((doc) => ({
			...doc.data(),
			id: doc.id,
		})) as ListItemType[];
	}
}

// export service
export default new Service();
