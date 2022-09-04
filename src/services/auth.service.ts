import {
	GoogleAuthProvider,
	onAuthStateChanged,
	signInAnonymously,
	signInWithPopup,
	Unsubscribe,
	User,
} from 'firebase/auth';
import { BehaviorSubject } from 'rxjs';
import { FirebaseService } from './@';
import { FirestoreAuth } from './common/@';

// define service
class AuthService extends FirestoreAuth {
	constructor() {
		super(new BehaviorSubject<User | null>(null));
	}

	logout(): void {
		FirebaseService.Auth.signOut();
	}

	signInAnonymously(): void {
		signInAnonymously(FirebaseService.Auth);
	}

	signInWithGoogle(): void {
		signInWithPopup(FirebaseService.Auth, new GoogleAuthProvider());
	}
}

// export service
export default new AuthService();
