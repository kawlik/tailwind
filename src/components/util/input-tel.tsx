import PhoneInputWithCountrySelect from 'react-phone-number-input';
import 'react-phone-number-input/style.css';

export default function (props: {
	onChange(value: string): void;
	placeholder: string;
	value: string;
}) {
	// component logic

	// component layout
	return (
		<PhoneInputWithCountrySelect
			className="child-input:bg-gray-400 child-input:bg-opacity-20 child-input:px-4 child-input:py-2 child-input:rounded-md "
			defaultCountry="PL"
			placeholder={props.placeholder}
			onChange={props.onChange}
			value={props.value}
		/>
	);
}
