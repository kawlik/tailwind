import { FormEvent, useState } from 'react';
import { FaShieldAlt } from 'react-icons/fa';
import { AuthService, PhoneService } from '../../services/@';
import { Input } from '../util/@';
import { SignInBtn } from './@';

export default function () {
	// component logic

	// create state
	const [phone, setPhone] = useState('');

	// update state
	const updatePhone = (event: FormEvent<HTMLInputElement>) => {
		const parsed = PhoneService.parseToPhoneNumber(event.currentTarget.value);

		setPhone(parsed);
	};

	const generateOTP = () => {
		AuthService.signInWithPhoneNumber(phone);
	};

	// component layout
	return (
		<form className="flex flex-col gap-2 items-stretch">
			<Input
				onChange={updatePhone}
				placeholder="Your phone number"
				type="tel"
				value={phone}
			/>
			<SignInBtn
				disabled={!PhoneService.isValidPhoneNumber(phone)}
				id="recaptcha-otp"
				icon={FaShieldAlt}
				label="Generate OTP"
				onClick={generateOTP}
			/>
			<div id="recaptcha-verifier" />
		</form>
	);
}
