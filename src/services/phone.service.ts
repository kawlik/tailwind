import { isValidPhoneNumber } from 'react-phone-number-input';

// define service
class PhoneService {
	isValidPhoneNumber = isValidPhoneNumber;
}

// export service
export default new PhoneService();
