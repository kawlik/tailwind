import { useState } from 'react';
import { FaArrowLeft, FaArrowRight, FaLock, FaStarHalfAlt } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import { BarHeader } from '../components/common/@';
import { OTPAction, OTPHeader } from '../components/screen/@';
import { BgIcon } from '../components/util/@';
import { AuthService } from '../services/@';

export default function () {
	// component logic
	const navigate = useNavigate();

	// create state
	const [code, setCode] = useState('');

	// dataset
	const disabled = !code.length;

	// actions
	const goBack = () => navigate(-1);

	const verify = () => {
		AuthService.verifyOTP(code);
	};

	// component layout
	return (
		<>
			<BarHeader
				actionL={goBack}
				iconL={FaArrowLeft}
				iconR={FaArrowRight}
				label="Verify OTP"
				skipR={true}
			/>
			<OTPHeader />
			<OTPAction
				actionButton={verify}
				actionUpdate={setCode}
				disabled={disabled}
				icon={FaStarHalfAlt}
				inputType="otp"
				label="Verify OTP"
				title="Your phone number"
				value={code}
			/>
			<BgIcon icon={FaLock} />
		</>
	);
}
