import { IconType } from 'react-icons';

export default function (props: { icon: IconType }) {
	// component logic

	// component layout
	return (
		<span className="bg-gray-400 bg-opacity-20 mx-0 mt-auto p-2 rounded-md w-8">
			<props.icon />
		</span>
	);
}
