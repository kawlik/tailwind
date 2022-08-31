import { User } from 'firebase/auth';
import { createContext, useContext } from 'react';

// create context
export const AuthContext = createContext<{
	user: User | null;
}>({
	user: null,
});

// export consumer
export default function () {
	return useContext(AuthContext);
}
