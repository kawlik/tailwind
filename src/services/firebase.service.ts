import { getAuth, onAuthStateChanged, User } from 'firebase/auth';
import { AuthService } from './@';
import { FirebaseConfig } from '../configs/@';

// define service
class Service {
	constructor(private auth = getAuth(FirebaseConfig)) {
		// register events
		onAuthStateChanged(auth, (user) => AuthService.user$.next(user));
	}

	get Auth() {
		return this.auth;
	}
}

// export service
export default new Service();
