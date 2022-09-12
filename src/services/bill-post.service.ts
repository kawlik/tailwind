import { arrayUnion, doc, Timestamp, updateDoc, writeBatch } from 'firebase/firestore';
import { BIllPostType } from '../types/@';
import { FirebaseService, FirestoreService } from './@';

// define service
class BillPostService {
	private getDataRef = (document: string) => {
		return doc(FirestoreService.collectionBillData, document);
	};

	private getInfoRef = (document: string) => {
		return doc(FirestoreService.collectionBillInfo, document);
	};

	private updateData = (payload: BIllPostType) => {
		return {
			posts: arrayUnion(payload),
		};
	};

	private updateInfo = () => {
		return {
			timestampClosed: null,
			timestampUpdated: Timestamp.now(),
		};
	};

	async post(document: string, payload: BIllPostType) {
		const batch = writeBatch(FirebaseService.Firestore);

		batch.update(this.getDataRef(document), this.updateData(payload));
		batch.update(this.getInfoRef(document), this.updateInfo());

		await batch.commit();
	}
}

// export service
export default new BillPostService();
