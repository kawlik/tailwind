import { IconType } from 'react-icons';

export default function (props: { icon: IconType }) {
	// component logic

	// component layout
	return (
		<span className="bg-gray-400 bg-opacity-20 border-green-500 border-2 my-auto p-2 rounded-full">
			<props.icon className="text-3xl text-green-500" />
		</span>
	);
}
