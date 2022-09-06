import { IconType } from 'react-icons';

export default function (props: {
	disabled?: boolean;
	id?: string;
	icon: IconType;
	label: string;
	onClick?(): void;
}) {
	// component logic

	// component layout
	return (
		<button
			className="bg-gray-400 bg-opacity-20 flex flex-nowrap gap-2 items-center px-4 py-3 rounded-md active:scale-95 disabled:scale-100 disabled:opacity-50"
			disabled={props.disabled}
			id={props.id}
			onClick={props.onClick}
		>
			<span className="text-xl w-8">
				<props.icon />
			</span>
			<span className="mx-auto">{props.label}</span>
			<span className="invisible w-8" />
		</button>
	);
}
