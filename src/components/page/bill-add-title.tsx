import { FormEvent } from 'react';
import { Input } from '../util/@';

export default function (props: {
	onChange?(event: FormEvent<HTMLInputElement>): void;
	value: string;
}) {
	// component logic

	// component layout
	return (
		<div className="flex flex-col">
			<Input
				onChange={props.onChange}
				placeholder="Title"
				type="text"
				value={props.value}
			/>
		</div>
	);
}
