import { Header, Message } from '@/entities/ai';
import { SendMessage } from '@/features/ai';

export function Chat() {
	return (
		<div>
			<span>Chat</span>
			<Header />
			<div>
				<Message />
				<Message />
				<Message />
				<Message />
				<Message />
				<Message />
			</div>
			<div>
				<SendMessage />
			</div>
		</div>
	);
}