import { arrayUnion, doc, updateDoc } from 'firebase/firestore';
import { BIllPostType } from '../types/@';
import { FirebaseService, FirestoreService } from './@';

// define service
class BillPostService {
	private getRef = (document: string) => {
		return doc(FirebaseService.Firestore, FirestoreService.BillData, document);
	};

	private update = (payload: BIllPostType) => {
		return {
			posts: arrayUnion(payload),
		};
	};

	async post(document: string, payload: BIllPostType) {
		await updateDoc(this.getRef(document), this.update(payload));
	}
}

// export service
export default new BillPostService();
