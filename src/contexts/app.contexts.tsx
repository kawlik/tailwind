import { User } from 'firebase/auth';
import { createContext, useContext } from 'react';
import { BillInfoType, ContextsType } from '../types/@';

// create context
export const AuthContext = createContext<{
	auth: boolean;
	bill: ContextsType<BillInfoType | null>;
	user: ContextsType<User | null>;
}>({
	auth: false,
	bill: { get: () => null, set: () => {} },
	user: { get: () => null, set: () => {} },
});

// export consumer
export default function () {
	return useContext(AuthContext);
}
