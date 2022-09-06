import { Timestamp } from 'firebase/firestore';
import { FormEvent, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { BillAddStart, BillAddTitle, BillAddUser, BillAddUsers } from '../components/page/@';
import { useContexts } from '../contexts/@';
import { BillInfoService, PhoneService } from '../services/@';

export default function () {
	// component logic
	const contexts = useContexts();
	const navigate = useNavigate();

	// dataset
	const myPhone = contexts.user.get()?.phoneNumber || '';

	// create state
	const [phone, setPhone] = useState('');
	const [title, setTitle] = useState('');
	const [users, setUsers] = useState([myPhone]);

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

	// actions
	const createBill = async () => {
		const payload = title;
		setTitle('');

		const billID = await BillInfoService.updateList({
			participants: users,
			timestampCreated: Timestamp.now(),
			timestampUpdated: Timestamp.now(),
			title: payload,
		}).catch((err: unknown) => {
			alert('Your bill was not published for unknown reasons.\nPlease try again later.');
			setTitle(payload);
		});

		if (billID) navigate(`/bill/${billID}/`, { replace: true });
	};

	// component layout
	return (
		<>
			<section className="flex flex-1 flex-col gap-4 px-3 py-1 overflow-y-scroll">
				<BillAddTitle onChange={updateTitle} value={title} />
				<BillAddUser onChange={updatePhone} onUpdate={updateUsers} value={phone} />
				<BillAddUsers myPhoneNumber={myPhone} remove={removeUsers} usersList={users} />
			</section>
			<BillAddStart action={createBill} disabled={!title.length} />
		</>
	);
}
