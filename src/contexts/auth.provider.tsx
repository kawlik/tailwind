import { User } from 'firebase/auth';
import { useEffect, useState } from 'react';
import { AuthService } from '../services/@';
import { AuthContext } from './auth.context';

export default function (props: { children: JSX.Element | JSX.Element[] }) {
	// component logic
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
				user,
			}}
		/>
	);
}
