import { User } from 'firebase/auth';
import { createContext, useContext } from 'react';
import { BillInfoType } from '../types/@';

// create context
export const AuthContext = createContext<{
	bill: BillInfoType | null;
	user: User | null;
}>({
	bill: null,
	user: null,
});

// export consumer
export default function () {
	return useContext(AuthContext);
}
