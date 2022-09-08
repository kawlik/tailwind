import { IconType } from 'react-icons';

export default function (props: { disabled?: boolean; icon: IconType; onClick?(): void }) {
	// component logic

	// component layout
	return (
		<button
			className="bg-gray-400 bg-opacity-20 p-2 rounded-md w-8 active:scale-95 disabled:scale-100 disabled:opacity-50"
			disabled={!!props?.disabled}
			onClick={props.onClick}
		>
			<props.icon />
		</button>
	);
}
