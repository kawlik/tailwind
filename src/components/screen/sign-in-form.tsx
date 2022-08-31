import { BtnLabel, Input } from '../util/@';

export default function (props: {}) {
	// component logic

	// component layout
	return (
		<form className="flex flex-col gap-2 items-stretch">
			<Input placeholder="Email" type="text" value="" />
			<Input placeholder="Password" type="password" value="" />
			<BtnLabel disabled={true} label="Sign in" />
		</form>
	);
}
