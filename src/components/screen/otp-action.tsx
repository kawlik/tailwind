import { IconType } from 'react-icons/lib';
import { InputOTP, InputTel } from '../util/@';
import { OTPButton } from './@';

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
		<section className="bottom-0 flex flex-1 flex-col gap-3 justify-center p-3 sticky">
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
			<OTPButton
				disabled={props.disabled}
				icon={props.icon}
				label={props.label}
				onClick={props.actionButton}
			/>
		</section>
	);
}
