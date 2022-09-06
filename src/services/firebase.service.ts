import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { initializeFirestore } from 'firebase/firestore';
import { AuthService } from './@';
import { FirebaseConfig } from '../configs/@';

// define service
class FirebaseService {
	constructor(
		private auth = getAuth(FirebaseConfig),
		private firestore = initializeFirestore(FirebaseConfig, {}),
	) {
		this.auth.languageCode = 'pl';
	}

	get Auth() {
		return this.auth;
	}

	get Firestore() {
		return this.firestore;
	}
}

// export service
export default new FirebaseService();
