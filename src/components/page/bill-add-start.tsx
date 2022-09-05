import { BtnLabel } from '../util/@';

export default function (props: { action(): void; disabled: boolean }) {
	// component logic

	// component layout
	return (
		<aside className="flex flex-col pb-4 pt-2 px-3 items-stretch">
			<BtnLabel
				disabled={props.disabled}
				label="Start new bill!"
				onClick={props.action}
			/>
		</aside>
	);
}
