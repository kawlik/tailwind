import { Timestamp } from 'firebase/firestore';
import { FormEvent, useState } from 'react';
import { FaPaperPlane, FaPlus } from 'react-icons/fa';
import { useContexts } from '../../contexts/@';
import { PostService } from '../../services/@';
import { BtnIcon, Input } from '../util/@';

export default function () {
	// component logic
	const contexts = useContexts();

	// create state
	const [post, setPost] = useState('');

	// update state
	const updatePost = (event: FormEvent<HTMLInputElement>) => {
		setPost(event.currentTarget.value);
	};

	// actions
	const send = async () => {
		await PostService.post(contexts.bill.get()?.id || '', {
			payload: post,
			timestamp: Timestamp.now(),
			type: 'text',
			user: contexts.user.get()?.uid || '',
		});

		setPost('');
	};

	// component layout
	return (
		<aside className="flex flex-nowrap gap-2 px-3 py-4">
			<div className="flex flex-1 flex-col">
				<Input onChange={updatePost} placeholder="Type here" type="text" value={post} />
			</div>
			<div className="flex flex-nowrap gap-2">
				<BtnIcon disabled={!post} icon={FaPaperPlane} onClick={send} />
				<BtnIcon disabled={false} icon={FaPlus} />
			</div>
		</aside>
	);
}
