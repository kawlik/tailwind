export default function (props: { collapse: boolean; children: JSX.Element }) {
	// component logic

	// component layout
	return props.collapse ? <div className="invisible">{props.children}</div> : props.children;
}
