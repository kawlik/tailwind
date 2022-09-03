import {
	DocumentReference,
	DocumentSnapshot,
	onSnapshot,
	Unsubscribe,
} from 'firebase/firestore';
import { BehaviorSubject } from 'rxjs';

export default abstract class FirestoreDocument<T> {
	protected abstract callback: (snapshot: DocumentSnapshot) => void;
	protected abstract register: (document: string) => DocumentReference;

	protected snapshot: Unsubscribe;
	protected subject$: BehaviorSubject<T>;

	constructor(subject$: BehaviorSubject<T>) {
		this.snapshot = () => {};
		this.subject$ = subject$;
	}

	subscribeOn = (document: string) => {
		this.unsubscribe();
		this.snapshot = onSnapshot(this.register(document), this.callback);

		return this.subject$;
	};

	unsubscribe = () => {
		this.snapshot();
	};
}
