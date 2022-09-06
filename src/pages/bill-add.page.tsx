import { FormEvent, useState } from 'react';
import { BillAddStart, BillAddTitle, BillAddUser, BillAddUsers } from '../components/page/@';
import { PhoneService } from '../services/@';

export default function () {
	// component logic

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
			<section className="flex flex-1 flex-col gap-4 px-3 py-1 overflow-y-scroll">
				<BillAddTitle onChange={updateTitle} value={title} />
				<BillAddUser onChange={updatePhone} onUpdate={updateUsers} value={phone} />
				<BillAddUsers remove={removeUsers} usersList={users} />
			</section>
			<BillAddStart action={() => {}} disabled={!title.length} />
		</>
	);
}
