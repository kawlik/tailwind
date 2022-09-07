import {
	addDoc,
	collection,
	doc,
	Query,
	query,
	QuerySnapshot,
	setDoc,
	where,
} from 'firebase/firestore';
import { BehaviorSubject } from 'rxjs';
import { BillInfoType } from '../types/@';
import { FirebaseService, FirestoreService } from './@';
import { FirestoreQuery } from './common/@';

// define service
class ListService<T> extends FirestoreQuery<T> {
	constructor(feed: T) {
		super(new BehaviorSubject<T>(feed));
	}

	override register = (document: string): Query => {
		return query(
			collection(FirebaseService.Firestore, FirestoreService.BillInfo),
			where('participants', 'array-contains', document),
		);
	};

	override callback = (snapshot: QuerySnapshot): void => {
		const payload = snapshot.docs.map((doc) => ({
			...doc.data(),
			id: doc.id,
		}));

		this.subject$.next(payload as T);
	};

	updateList = async (billInfo: BillInfoType): Promise<string> => {
		const billInfoDoc = await addDoc(
			collection(FirebaseService.Firestore, FirestoreService.BillInfo),
			billInfo,
		);

		const billDataDoc = await setDoc(
			doc(FirebaseService.Firestore, FirestoreService.BillData, billInfoDoc.id),
			{ posts: [] },
		);

		return billInfoDoc.id;
	};
}

// export service
export default new ListService<BillInfoType[]>([]);
