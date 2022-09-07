export default function (props: {
	onChange(value: string): void;
	placeholder: string;
	value: string;
}) {
	// component logic

	// component layout
	return (
		<input
			className="bg-gray-400 bg-opacity-20 px-4 py-2 rounded-md"
			onChange={(e) => props.onChange(e.currentTarget.value)}
			placeholder={props.placeholder}
			type="number"
			value={props.value}
		/>
	);
}
