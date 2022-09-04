import { arrayUnion, doc, serverTimestamp, Timestamp, updateDoc } from 'firebase/firestore';
import { BIllPostType } from '../types/@';
import { FirebaseService, FirestoreService } from './@';

// define service
class PostService {
	async post(document: string, payload: BIllPostType) {
		await updateDoc(this.getRef(document), this.update(payload));
	}

	private getRef(document: string) {
		return doc(FirebaseService.Firestore, FirestoreService.Bill, document);
	}

	private update(payload: BIllPostType) {
		return {
			posts: arrayUnion(payload),
		};
	}
}

// export service
export default new PostService();
