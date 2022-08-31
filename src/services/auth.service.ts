import { signInAnonymously, User } from 'firebase/auth';
import { BehaviorSubject } from 'rxjs';
import { FirebaseService } from './@';

// define service
class Service {
	readonly user$ = new BehaviorSubject<User | null>(null);

	constructor() {}

	logout(): void {
		FirebaseService.Auth.signOut();
	}

	signInAnonymously(): void {
		signInAnonymously(FirebaseService.Auth);
	}
}

// export service
export default new Service();
