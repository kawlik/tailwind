import { ListItem } from '../components/page/@';
import { Input } from '../components/util/@';

export default function () {
	// component logic

	// component layout
	return (
		<section className="flex-1 px-3 overflow-y-scroll">
			<aside className="backdrop-blur-sm flex mb-4 sticky top-0">
				<Input placeholder="Search" type="text" value="" />
			</aside>
			<ul className="flex flex-col gap-4">
				<ListItem
					action={() => {}}
					id={'1'}
					participants={['User 1', 'User 2']}
					timestamp={'00.00.0000'}
					title={'Title'}
				/>
				<ListItem
					action={() => {}}
					id={'1'}
					participants={['User 1', 'User 2']}
					timestamp={'00.00.0000'}
					title={'Title'}
				/>
				<ListItem
					action={() => {}}
					id={'1'}
					participants={['User 1', 'User 2']}
					timestamp={'00.00.0000'}
					title={'Title'}
				/>
				<ListItem
					action={() => {}}
					id={'1'}
					participants={['User 1', 'User 2']}
					timestamp={'00.00.0000'}
					title={'Title'}
				/>
				<ListItem
					action={() => {}}
					id={'1'}
					participants={['User 1', 'User 2']}
					timestamp={'00.00.0000'}
					title={'Title'}
				/>
				<ListItem
					action={() => {}}
					id={'1'}
					participants={['User 1', 'User 2']}
					timestamp={'00.00.0000'}
					title={'Title'}
				/>
				<ListItem
					action={() => {}}
					id={'1'}
					participants={['User 1', 'User 2']}
					timestamp={'00.00.0000'}
					title={'Title'}
				/>
				<ListItem
					action={() => {}}
					id={'1'}
					participants={['User 1', 'User 2']}
					timestamp={'00.00.0000'}
					title={'Title'}
				/>
				<ListItem
					action={() => {}}
					id={'1'}
					participants={['User 1', 'User 2']}
					timestamp={'00.00.0000'}
					title={'Title'}
				/>
				<ListItem
					action={() => {}}
					id={'1'}
					participants={['User 1', 'User 2']}
					timestamp={'00.00.0000'}
					title={'Title'}
				/>
			</ul>
		</section>
	);
}
