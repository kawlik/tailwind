import { FormEvent } from 'react';
import { FaList, FaUserPlus } from 'react-icons/fa';
import { PhoneService } from '../../services/@';
import { BtnIcon, Input } from '../util/@';

export default function (props: {
	onChange?(event: FormEvent<HTMLInputElement>): void;
	onUpdate?(): void;
	value: string;
}) {
	// component logic
	const invalidPhoneNumber = !PhoneService.isValidPhoneNumber(props.value);

	// component layout
	return (
		<div>
			<h4 className="font-semibold">Add user</h4>
			<div className="flex flex-nowrap gap-2">
				<div className="flex flex-1 flex-col">
					<Input
						onChange={props.onChange}
						placeholder="User phone number"
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
				<span className="text-lg font-mono">XXX-XXX-XXX</span>
			</p>
		</div>
	);
}
