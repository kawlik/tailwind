import { IconType } from 'react-icons';
import { FaPlus } from 'react-icons/fa';
import { NavLink } from 'react-router-dom';
import { BtnIconExposed, BtnIconLabel } from './@';

export default function (props: {
	actionAdd(): void;
	icons: [IconType, IconType, IconType, IconType];
	pages: [string, string, string, string];
}) {
	// component logic

	// actions
	const hightlightIfActive = (className: { isActive: boolean }) =>
		'flex flex-1 ' + (className.isActive ? 'text-green-500' : '');

	// component layout
	return (
		<footer className="flex flex-nowrap gap-1 items-stretch justify-around p-3 pb-4 z-30">
			<NavLink to={props.pages[0]} className={hightlightIfActive}>
				<BtnIconLabel icon={props.icons[0]} label={props.pages[0]} />
			</NavLink>
			<NavLink to={props.pages[1]} className={hightlightIfActive}>
				<BtnIconLabel icon={props.icons[1]} label={props.pages[1]} />
			</NavLink>
			<BtnIconExposed icon={FaPlus} onClick={props.actionAdd} />
			<NavLink to={props.pages[2]} className={hightlightIfActive}>
				<BtnIconLabel icon={props.icons[2]} label={props.pages[2]} />
			</NavLink>
			<NavLink to={props.pages[3]} className={hightlightIfActive}>
				<BtnIconLabel icon={props.icons[3]} label={props.pages[3]} />
			</NavLink>
		</footer>
	);
}
