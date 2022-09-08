import { FaList, FaUserPlus } from 'react-icons/fa';
import { PhoneService } from '../../services/@';
import { BtnIcon, InputTel } from '../../components/@';

export default function (props: {
	onChange(value: string): void;
	onUpdate(): void;
	value: string;
}) {
	// component logic
	const invalidPhoneNumber = !PhoneService.isValidPhoneNumber(props.value);

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
				<BtnIcon disabled={true} icon={FaList} />
			</div>
		</div>
	);
}
