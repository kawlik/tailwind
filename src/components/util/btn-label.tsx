export default function (props: { disabled?: boolean; label: string; onClick?(): void }) {
	// component logic

	// component layout
	return (
		<button
			className="bg-gray-400 bg-opacity-20 p-2 rounded-md text-center active:scale-95 disabled:scale-100 disabled:opacity-50"
			disabled={!!props?.disabled}
			onClick={props.onClick}
		>
			{props.label}
		</button>
	);
}
