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
			<h4 className="font-semibold">Bill title</h4>
			<Input
				onChange={props.onChange}
				placeholder="Title"
				type="text"
				value={props.value}
			/>
		</div>
	);
}
