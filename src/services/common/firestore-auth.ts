import {
	ConfirmationResult,
	onAuthStateChanged,
	RecaptchaVerifier,
	signInWithPhoneNumber,
	Unsubscribe,
	User,
} from 'firebase/auth';
import { BehaviorSubject } from 'rxjs';
import { FirebaseService } from '../@';

export default abstract class FirestoreUser {
	protected snapshot: Unsubscribe;
	protected subject$: BehaviorSubject<User | null>;
	protected recaptha: RecaptchaVerifier | null;

	constructor(subject$: BehaviorSubject<User | null>) {
		this.snapshot = () => {};
		this.subject$ = subject$;
		this.recaptha = null;
	}

	prepareSignInWithPhoneNumber = (phone: string): Promise<ConfirmationResult> => {
		this.recaptha?.clear();

		this.recaptha = new RecaptchaVerifier('recaptcha-verifier', {}, FirebaseService.Auth);
		this.recaptha.render();

		return signInWithPhoneNumber(FirebaseService.Auth, phone, this.recaptha);
	};

	subscribeOn = (): BehaviorSubject<User | null> => {
		this.unsubscribe();
		this.snapshot = onAuthStateChanged(FirebaseService.Auth, (user) => {
			this.subject$.next(user);
		});

		return this.subject$;
	};

	unsubscribe = (): void => {
		this.snapshot();
	};
}
