import { FaShieldAlt } from 'react-icons/fa';
import { Input } from '../util/@';
import { SignInBtn } from './@';

export default function (props: {}) {
	// component logic

	// component layout
	return (
		<form className="flex flex-col gap-2 items-stretch">
			<Input placeholder="Your phone number" type="tel" value="" />
			<Input placeholder="Your username" type="text" value="" />
			<SignInBtn
				disabled={true}
				id="recaptcha-otp"
				icon={FaShieldAlt}
				label="Generate OTP"
			/>
		</form>
	);
}
