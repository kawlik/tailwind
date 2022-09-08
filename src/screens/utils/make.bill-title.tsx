import { Input } from '../../components/@';

export default function (props: { onChange(value: string): void; value: string }) {
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
