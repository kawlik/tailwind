import { FaList, FaUserPlus } from 'react-icons/fa';
import { AlertService, PhoneService } from '../../services/@';
import { BtnIcon, InputTel } from '../../components/@';

export default function (props: {
	onChange(value: string): void;
	onSelect(value: string): void;
	onUpdate(): void;
	value: string;
}) {
	// component logic
	const invalidPhoneNumber = !PhoneService.isValidPhoneNumber(props.value);

	// actions
	const tryUpdate = async () => {
		const user = await PhoneService.getContact().catch(() => {
			AlertService.promptError();
		});

		if (!user) return AlertService.promptError();

		props.onSelect(user.tel);
	};

	// component layout
	return (
		<div className="flex flex-nowrap gap-2">
			<div className="flex flex-1 flex-col">
				<InputTel
					onChange={props.onChange}
					placeholder="Phone number"
					value={props.value}
				/>
			</div>
			<div className="flex flex-nowrap gap-2">
				<BtnIcon
					disabled={invalidPhoneNumber}
					icon={FaUserPlus}
					onClick={props.onUpdate}
				/>
				<BtnIcon
					disabled={!PhoneService.isSupported}
					icon={FaList}
					onClick={tryUpdate}
				/>
			</div>
		</div>
	);
}
