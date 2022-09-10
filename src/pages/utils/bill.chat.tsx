import { Timestamp } from 'firebase/firestore';
import { useState } from 'react';
import { FaPaperPlane, FaPlus } from 'react-icons/fa';
import { useParams } from 'react-router-dom';
import { useContexts } from '../../contexts/@';
import { AlertService, BillPostService } from '../../services/@';
import { BtnIcon, Input } from '../../components/@';

export default function () {
	// component logic
	const contexts = useContexts();
	const pathname = useParams();

	// create state
	const [post, setPost] = useState('');

	// actions
	const send = () => {
		setPost('');

		BillPostService.post(contexts.bill.get()?.id || pathname['billID'] || '', {
			payload: post,
			timestamp: Timestamp.now(),
			type: 'text',
			user: contexts.user.get()?.phoneNumber!,
		}).catch(() => {
			AlertService.promptError().then(() => setPost(post));
		});
	};

	// component layout
	return (
		<aside className="flex flex-nowrap gap-2 pb-4 pt-2 px-3">
			<div className="flex flex-1 flex-col">
				<Input onChange={setPost} placeholder="Type here" type="text" value={post} />
			</div>
			<div className="flex flex-nowrap gap-2">
				<BtnIcon disabled={!post} icon={FaPaperPlane} onClick={send} />
				<BtnIcon disabled={true} icon={FaPlus} />
			</div>
		</aside>
	);
}
