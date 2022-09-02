import { User } from 'firebase/auth';
import { useEffect, useState } from 'react';
import { AuthService } from '../services/@';
import { BillInfoType } from '../types/@';
import { AuthContext } from './app.context';

export default function (props: { children: JSX.Element | JSX.Element[] }) {
	// component logic

	// create state
	const [bill, setBill] = useState<BillInfoType | null>(null);
	const [user, setUser] = useState<User | null>(null);

	// update state
	useEffect(() => {
		AuthService.user$.subscribe((user) => setUser(user));
	}, []);

	// component layout
	return (
		<AuthContext.Provider
			children={props.children}
			value={{
				bill,
				user,
			}}
		/>
	);
}
