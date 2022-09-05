import { FormEvent, useState } from 'react';
import { FaTrashAlt } from 'react-icons/fa';
import { BillAddStart, BillAddTitle, BillAddUsers } from '../components/page/@';
import { BtnIcon } from '../components/util/@';
import { useContexts } from '../contexts/@';
import { PhoneService } from '../services/@';

export default function () {
	// component logic
	const contexts = useContexts();

	// create state
	const [phone, setPhone] = useState('');
	const [title, setTitle] = useState('');
	const [users, setUsers] = useState(['667-941-501']);

	// update state
	const updatePhone = (event: FormEvent<HTMLInputElement>) => {
		const parsed = PhoneService.parseToPhoneNumber(event.currentTarget.value);

		setPhone(parsed);
	};

	const updateTitle = (event: FormEvent<HTMLInputElement>) => {
		setTitle(event.currentTarget.value.slice(0, 32));
	};

	const updateUsers = () => {
		setUsers([...new Set([...users, phone])].slice(0, 6));
		setPhone('');
	};

	const removeUsers = (remove: string) => {
		setUsers(users.filter((user) => user !== remove));
	};

	// component layout
	return (
		<>
			<section className="flex flex-1 flex-col gap-4 pb-2 px-3 overflow-y-scroll">
				<BillAddTitle onChange={updateTitle} value={title} />
				<BillAddUsers onChange={updatePhone} onUpdate={updateUsers} value={phone} />
				<ul className="flex flex-col-reverse gap-2">
					{users.map((user) => (
						<li className="flex flex-nowrap font-semibold gap-2 text-lg" key={user}>
							<BtnIcon
								disabled={user === '667-941-501'}
								icon={FaTrashAlt}
								onClick={() => removeUsers(user)}
							/>
							<span>{user}</span>
						</li>
					))}
					<h4 className="font-semibold">Added users</h4>
				</ul>
			</section>
			<BillAddStart action={() => {}} disabled={!title.length} />
		</>
	);
}
