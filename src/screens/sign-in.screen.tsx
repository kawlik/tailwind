import { FaLock, FaUserSecret } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { BgIcon } from '../components/util/@';
import { SignInBtn, SignInForm } from '../components/screen/@';
import { AuthService } from '../services/@';

export default function () {
	// component logic

	// component layout
	return (
		<>
			<BgIcon icon={FaLock} />
			<section className="flex flex-1 flex-col gap-3 p-4">
				<h2 className="font-bold text-xl">Sign in via email</h2>
				<SignInForm />
				<h2 className="font-bold text-xl">or use third party</h2>
				<div className="flex flex-1 flex-col gap-2">
					<SignInBtn
						icon={FaUserSecret}
						label="Sign in anonymously"
						onClick={AuthService.signInAnonymously}
					/>
				</div>
			</section>
			<Link to="/signup" className="font-semibold text-center text-lg m-3 mt-auto">
				Don't have an account?
			</Link>
		</>
	);
}
