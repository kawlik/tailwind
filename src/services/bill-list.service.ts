import {
	addDoc,
	collection,
	doc,
	limit,
	orderBy,
	Query,
	query,
	QuerySnapshot,
	setDoc,
	where,
} from 'firebase/firestore';
import { BehaviorSubject } from 'rxjs';
import { BillInfoType } from '../types/@';
import { FirebaseService, FirestoreService } from './@';
import { FirestoreQuery } from './utils/@';

// define service
class BillListService<T> extends FirestoreQuery<T> {
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

	sort = (a: BillInfoType, b: BillInfoType): number => {
		return a.timestampUpdated.seconds > b.timestampUpdated.seconds ? -1 : 1;
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
export default new BillListService<BillInfoType[]>([]);