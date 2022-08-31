import { IconType } from 'react-icons';
import { BtnIcon, Collapse } from '../util/@';

export default function (props: {
	actionL?(): void;
	actionR?(): void;
	iconL: IconType;
	iconR: IconType;
	label: string;
	skipL?: boolean;
	skipR?: boolean;
}) {
	// component logic

	// component layout
	return (
		<header className="flex flex-nowrap items-center justify-between px-3 py-4 z-30">
			<Collapse collapse={!!props?.skipL}>
				<BtnIcon icon={props.iconL} onClick={props.actionR} />
			</Collapse>
			<h4 className="capitalize font-semibold text-lg">{props.label}</h4>
			<Collapse collapse={!!props?.skipR}>
				<BtnIcon icon={props.iconR} onClick={props.actionR} />
			</Collapse>
		</header>
	);
}
