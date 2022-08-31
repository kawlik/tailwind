export default function (props: {
	onChange?(): void;
	placeholder: string;
	type: string;
	value: string;
}) {
	// component logic

	// component layout
	return (
		<input
			className="bg-gray-400 bg-opacity-20 flex-1 px-4 py-2 rounded-md"
			onChange={props.onChange}
			placeholder={props.placeholder}
			type={props.type}
			value={props.value}
		/>
	);
}
