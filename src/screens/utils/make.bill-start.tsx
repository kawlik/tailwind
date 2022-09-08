import { BtnLabel } from '../../components/@';

export default function (props: { action(): void; disabled: boolean }) {
	// component logic

	// component layout
	return (
		<aside className="flex flex-col items-stretch px-3 py-4">
			<BtnLabel
				disabled={props.disabled}
				label="Start new bill!"
				onClick={props.action}
			/>
		</aside>
	);
}
