import { FaLock } from 'react-icons/fa';
import { IconType } from 'react-icons/lib';
import { BgIcon, InputOTP, InputTel } from '../../components/@';
import { OTP_Button } from './@';

export default function (props: {
	actionButton(): void;
	actionUpdate(value: string): void;
	disabled: boolean;
	icon: IconType;
	inputType: 'tel' | 'otp';
	label: string;
	title: string;
	value: string;
}) {
	// component logic

	// component layout
	return (
		<section className="flex flex-1 flex-col gap-3 justify-between p-3 sticky">
			<div id="recaptcha-refrence" />
			<div className="bottom-0 flex flex-col gap-3 justify-center">
				{props.inputType === 'tel' && (
					<InputTel
						onChange={props.actionUpdate}
						placeholder={props.title}
						value={props.value}
					/>
				)}
				{props.inputType === 'otp' && (
					<InputOTP
						onChange={props.actionUpdate}
						placeholder={props.title}
						value={props.value}
					/>
				)}
				<OTP_Button
					disabled={props.disabled}
					icon={props.icon}
					label={props.label}
					onClick={props.actionButton}
				/>
			</div>
			<BgIcon icon={FaLock} />
		</section>
	);
}
