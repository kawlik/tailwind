import { FaDollarSign } from 'react-icons/fa';
import { useContexts } from '../../contexts/@';
import { StampIcon } from '../../components/@';

export default function (props: {
	order: number;
	payload: string;
	timestamp: string;
	type: string;
	user: string;
}) {
	// component logic
	const contexts = useContexts();

	// dataset
	const isMine = props.user === contexts.user.get()?.phoneNumber;

	// component layout
	return (
		<div
			className="flex flex-nowrap gap-2"
			style={{
				order: -props.order,
			}}
		>
			{isMine ? <div className="w-8 mt-auto" /> : <StampIcon icon={FaDollarSign} />}
			<div className={`mt-auto ${isMine ? 'ml-auto' : 'mr-auto'}`}>
				<p className="bg-gray-400 bg-opacity-20 p-2 rounded-md">{props.payload}</p>
			</div>
			{isMine ? <StampIcon icon={FaDollarSign} /> : <div className="w-8 mt-auto" />}
		</div>
	);
}
