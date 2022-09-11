import { formatPhoneNumberIntl, isValidPhoneNumber } from 'react-phone-number-input';
import { ContactsType } from '../types/@';

// define service
class PhoneService {
	constructor(
		private navigator: Navigator & ContactsType,
		private supported: boolean = false,
	) {
		this.navigator = navigator;
		this.supported = 'contacts' in navigator && 'ContactsManager' in window;
	}

	get isSupported() {
		return this.supported;
	}

	getContact = async (): Promise<{ name: string; tel: string }> => {
		const contact = await this.navigator.contacts
			?.select(['name', 'tel'], { multiple: false })
			.then((list) => list[0])
			.then((user) => ({
				name: user.name,
				tel: user.tel,
			}))
			.then((user) => ({
				name: user.name[0],
				tel: user.tel[0],
			}))
			.then((user) => ({
				name: user.name,
				tel: this.parseToPhoneNumber(user.tel),
			}));

		return contact || Promise.reject();
	};

	isValidPhoneNumber = isValidPhoneNumber;
	parseToPhoneNumber = formatPhoneNumberIntl;
}

// export service
export default new PhoneService(window.navigator);