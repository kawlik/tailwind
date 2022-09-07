import { FaList, FaUserPlus } from 'react-icons/fa';
import { PhoneService } from '../../services/@';
import { BtnIcon, Input } from '../util/@';

export default function (props: {
	onChange(value: string): void;
	onUpdate(): void;
	value: string;
}) {
	// component logic
	const invalidPhoneNumber = !PhoneService.isValidPhoneNumber(props.value);

	// component layout
	return (
		<div>
			<div className="flex flex-nowrap gap-2">
				<div className="flex flex-1 flex-col">
					<Input
						onChange={(e) => props.onChange(e.currentTarget.value)}
						placeholder="New participant"
						type="tel"
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
			<p className="text-sm">
				<span className="italic">Valid format is: </span>
				<span className="font-mono">XXX-XXX-XXX</span>
			</p>
		</div>
	);
}
