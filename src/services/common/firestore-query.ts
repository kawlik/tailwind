import { onSnapshot, Query, QuerySnapshot, Unsubscribe } from 'firebase/firestore';
import { BehaviorSubject } from 'rxjs';

export default abstract class FirestoreQuery<T> {
	protected abstract callback: (snapshot: QuerySnapshot) => void;
	protected abstract register: (document: string) => Query;

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
