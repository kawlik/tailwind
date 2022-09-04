import { User } from 'firebase/auth';
import { createContext, useContext } from 'react';
import { BillInfoType, ContextItemType } from '../types/@';

// create context
export const AuthContext = createContext<{
	bill: ContextItemType<BillInfoType | null>;
	user: ContextItemType<User | null>;
}>({
	bill: { get: () => null, set: () => {} },
	user: { get: () => null, set: () => {} },
});

// export consumer
export default function () {
	return useContext(AuthContext);
}
