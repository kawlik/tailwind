import { FormEvent, useState } from 'react';
import { FaPaperPlane, FaPlus } from 'react-icons/fa';
import { BtnIcon, Input } from '../util/@';

export default function () {
	// component logic

	// create state
	const [post, setPost] = useState('');

	// update state
	const updatePost = (event: FormEvent<HTMLInputElement>) => {
		setPost(event.currentTarget.value);
	};

	// component layout
	return (
		<aside className="flex flex-nowrap gap-2 px-3 py-4">
			<div className="flex flex-1 flex-col">
				<Input onChange={updatePost} placeholder="Type here" type="text" value={post} />
			</div>
			<div className="flex flex-nowrap gap-2">
				<BtnIcon icon={FaPaperPlane} />
				<BtnIcon icon={FaPlus} />
			</div>
		</aside>
	);
}
