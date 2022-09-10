import { Timestamp } from 'firebase/firestore';
import { useState } from 'react';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import { BarHeader } from '../components/@';
import {
	Make_BillStart,
	Make_BillTitle,
	Make_ParticipantsJoin,
	Make_ParticipantsList,
} from './utils/@';
import { useContexts } from '../contexts/@';
import { AlertService, BillListService } from '../services/@';

export default function () {
	// component logic
	const contexts = useContexts();
	const navigate = useNavigate();

	// create state
	const [phone, setPhone] = useState('');
	const [title, setTitle] = useState('');
	const [users, setUsers] = useState([contexts.user.get()?.phoneNumber! + ' (You)']);

	// dataset
	const canStartBilll = !!title.length && !!users.length;

	// actions
	const goBack = () => navigate(-1);

	const slectUser = (user: string) => {
		setUsers([...new Set([...users, user])].slice(0, 6));
	};

	const updateUsers = () => {
		setUsers([...new Set([...users, phone])].slice(0, 6));
		setPhone('');
	};

	const removeUsers = (remove: string) => {
		setUsers(users.filter((user) => user !== remove));
	};

	const createBill = async () => {
		setTitle('');
		setUsers([]);

		const billID = await BillListService.create({
			participants: users.map((user) => user.slice(0, 12)),
			timestampCreated: Timestamp.now(),
			timestampUpdated: Timestamp.now(),
			title: title,
		}).catch(() => {
			AlertService.promptError().then(() => {
				setTitle(title);
				setUsers(users);
			});
		});

		if (!!billID) navigate(`/bill/${billID}`, { replace: true });
	};

	// component layout
	return (
		<>
			<BarHeader
				actionL={goBack}
				iconL={FaArrowLeft}
				iconR={FaArrowRight}
				label={'Add new bill'}
				skipR={true}
			/>
			<section className="flex flex-1 flex-col gap-3 px-3 py-1 overflow-y-scroll">
				<Make_BillTitle onChange={setTitle} value={title} />
				<Make_ParticipantsJoin
					onChange={setPhone}
					onSelect={slectUser}
					onUpdate={updateUsers}
					value={phone}
				/>
				<Make_ParticipantsList remove={removeUsers} usersList={users} />
			</section>
			<Make_BillStart action={createBill} disabled={!canStartBilll} />
		</>
	);
}
