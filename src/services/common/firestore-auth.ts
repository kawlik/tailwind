import { Auth, onAuthStateChanged, Unsubscribe, User } from 'firebase/auth';
import { BehaviorSubject } from 'rxjs';
import { FirebaseService } from '../@';

export default abstract class FirestoreUser {
	protected snapshot: Unsubscribe;
	protected subject$: BehaviorSubject<User | null>;

	constructor(subject$: BehaviorSubject<User | null>) {
		this.snapshot = () => {};
		this.subject$ = subject$;
	}

	subscribeOn = (): BehaviorSubject<User | null> => {
		this.unsubscribe();
		this.snapshot = onAuthStateChanged(FirebaseService.Auth, (user) =>
			this.subject$.next(user),
		);

		return this.subject$;
	};

	unsubscribe = (): void => {
		this.snapshot();
	};
}
