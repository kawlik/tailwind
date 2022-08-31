import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { initializeFirestore } from 'firebase/firestore';
import { AuthService } from './@';
import { FirebaseConfig } from '../configs/@';

// define service
class Service {
	constructor(
		private auth = getAuth(FirebaseConfig),
		private firestore = initializeFirestore(FirebaseConfig, {}),
	) {
		// register events
		onAuthStateChanged(auth, (user) => AuthService.user$.next(user));
	}

	get Auth() {
		return this.auth;
	}

	get Firestore() {
		return this.firestore;
	}
}

// export service
export default new Service();
