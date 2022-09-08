import { useState } from 'react';
import { FaArrowLeft, FaArrowRight, FaLock, FaShieldAlt } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import { BarHeader } from '../components/@';
import { OTP_Action, OTP_Header } from './utils/@';
import { BgIcon } from '../components/@';
import { AuthService, PhoneService } from '../services/@';

// assets
import BgImage from '../assets/otp-create.png';

export default function () {
	// component logic
	const navigate = useNavigate();

	// create state
	const [phone, setPhone] = useState('');

	// dataset
	const disabled = !PhoneService.isValidPhoneNumber(phone);

	// actions
	const generate = () => {
		AuthService.createOTP(phone)
			.then(() => navigate('/otp-verify/'))
			.catch((err: unknown) => {
				alert('Your attempt has failed for unknown reasons.\nPlease try again later.');
			});
	};

	// component layout
	return (
		<>
			<BarHeader
				iconL={FaArrowLeft}
				iconR={FaArrowRight}
				label="Generate OTP"
				skipL={true}
				skipR={true}
			/>
			<OTP_Header
				alt="OTP Create"
				image={BgImage}
				label="To proceed, please log in with your phone number."
			/>
			<OTP_Action
				actionButton={generate}
				actionUpdate={setPhone}
				disabled={disabled}
				icon={FaShieldAlt}
				inputType="tel"
				label="Generate OTP"
				title="Your phone number"
				value={phone}
			/>
			<BgIcon icon={FaLock} />
		</>
	);
}
