import { signInAnonymously, User } from 'firebase/auth';
import { BehaviorSubject } from 'rxjs';
import { FirebaseService } from './@';

// define service
class Service {
	constructor(readonly user$ = new BehaviorSubject<User | null>(null)) {}

	logout(): void {
		FirebaseService.Auth.signOut();
	}

	signInAnonymously(): void {
		signInAnonymously(FirebaseService.Auth);
	}
}

// export service
export default new Service();
