import { Input } from '../util/@';

export default function (props: { onChange(value: string): void; value: string }) {
	// component logic

	// component layout
	return (
		<div className="flex flex-col">
			<Input
				onChange={(e) => props.onChange(e.currentTarget.value)}
				placeholder="Title"
				type="text"
				value={props.value}
			/>
		</div>
	);
}
