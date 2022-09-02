// define service
class FirestoreService {
	constructor(private bill = 'bill', private list = 'list') {}

	get Bill() {
		return this.bill;
	}

	get List() {
		return this.list;
	}
}

// export service
export default new FirestoreService();
