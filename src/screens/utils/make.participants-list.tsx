import { FaMinus } from 'react-icons/fa';
import { useContexts } from '../../contexts/@';
import { BtnIcon } from '../../components/@';

export default function (props: { remove(user: string): void; usersList: string[] }) {
	// component logic
	const contexts = useContexts();
	const disabled = (user: string) => user === contexts.user.get()?.phoneNumber;

	// component layout
	return (
		<ul className="flex flex-col-reverse gap-2">
			{props.usersList.map((user) => (
				<li className="flex flex-nowrap items-center gap-2" key={user}>
					<BtnIcon
						disabled={disabled(user)}
						icon={FaMinus}
						onClick={() => props.remove(user)}
					/>
					<span className="font-semibold leading-none text-lg">{user}</span>
				</li>
			))}
			<h4 className="font-semibold">Participants</h4>
		</ul>
	);
}
