import { FaLock } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { BgIcon } from '../components/util/@';
import { SignUpForm } from '../components/screen/@';

export default function () {
	// component logic

	// component layout
	return (
		<>
			<BgIcon icon={FaLock} />
			<section className="flex flex-1 flex-col gap-3 p-4">
				<h2 className="font-bold text-xl">Sign up via OTP</h2>
				<SignUpForm />
			</section>
			<Link to="/signin" className="font-semibold text-center text-lg m-3 mt-auto">
				Already with us?
			</Link>
		</>
	);
}
