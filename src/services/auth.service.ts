import {
	GoogleAuthProvider,
	RecaptchaVerifier,
	signInAnonymously,
	signInWithPhoneNumber,
	signInWithPopup,
	User,
} from 'firebase/auth';
import { BehaviorSubject } from 'rxjs';
import { FirebaseService, PhoneService } from './@';
import { FirestoreAuth } from './common/@';

// define service
class AuthService extends FirestoreAuth {
	constructor() {
		super(new BehaviorSubject<User | null>(null));
	}

	logout(): void {
		if (confirm('Are you sure you want to log out?')) FirebaseService.Auth.signOut();
	}

	signInAnonymously(): void {
		signInAnonymously(FirebaseService.Auth);
	}

	signInWithPhoneNumber(phone: string): void {
		if (!PhoneService.isValidPhoneNumber(phone)) return alert('Invalid phone number!');

		this.prepareSignInWithPhoneNumber(PhoneService.convertToE164(phone)).then((res) => {
			res.confirm(prompt('Validate your OTP:', '') || '');
		});
	}

	signInWithGoogle(): void {
		signInWithPopup(FirebaseService.Auth, new GoogleAuthProvider());
	}
}

// export service
export default new AuthService();
