import { GoogleAuthProvider, signInAnonymously, signInWithPopup, User } from 'firebase/auth';
import { BehaviorSubject } from 'rxjs';
import { FirebaseService } from './@';

// define service
class AuthService {
	readonly user$ = new BehaviorSubject<User | null>(null);

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
