export default function (props: { label: string }) {
	// component logic

	// component layout
	return (
		<div className="flex flex-1 p-2">
			<span className="font-extrabold m-auto text-2xl text-center text-gray-400 text-opacity-75">
				{props.label}
			</span>
		</div>
	);
}
