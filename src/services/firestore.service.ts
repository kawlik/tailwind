// define service
class FirestoreService {
	constructor(private billData = 'bill-data', private listInfo = 'bill-info') {}

	get BillData() {
		return this.billData;
	}

	get BillInfo() {
		return this.listInfo;
	}
}

// export service
export default new FirestoreService();
