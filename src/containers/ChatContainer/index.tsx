import { useState, useEffect } from 'react';
import MessageSendForm from '@/components/MessageSendForm';
import MessagesBox from '@/components/MessagesBox';
import { makeRequest } from '@/utils/requestUtil';
import { MessageItemType } from '@/types';
import styles from './ChatContainer.module.scss';

interface MessageServerItemType extends MessageItemType {
	token: string;
	_id: string;
};

const ChatContainer: React.FC = () => {
	const [localMessageItems, setLocalMessageItems] = useState<MessageItemType[] | []>([]);
	const sampleCurrentUser = {
		message: 'my message',
		author: 'Me',
		timestamp: 1521096352339
	};
	/*
		Callback after we add a new message
	*/
	const onMessageAdd = async (message: string): Promise<void> => {
		const response = await makeRequest({
			url: '',
			params: {
				message,
				author: 'Test'
			},
			method: 'POST'
		});
		if (response) {
			const { message, author, timestamp } = response;
			const freshStateObject = { message, author, timestamp };
			const localMessageItemsCopy = JSON.parse(JSON.stringify(localMessageItems));
			localMessageItemsCopy.push(freshStateObject);
			setLocalMessageItems(localMessageItemsCopy);
		}
	};

	/*
		Get messages from the server
	*/
	const getMessagesFromServer = async () => {
		const messages = await makeRequest({
			url: '/?since=1521096352339&limit=10'
		});
		if (messages) {
			const serverMessages = messages.map(({message, author, timestamp}: MessageServerItemType) => ({ message, author, timestamp }));
			setLocalMessageItems(serverMessages);
		}
	};

	useEffect(() => {
		getMessagesFromServer();
	}, []);

	/*
		Render the component
	*/
	return (
		<>
			<section data-testid="chat_container" className={styles.chat_container}>
				<div className={styles.chat_container__inside}>
					{
						localMessageItems.map((messageData, i) => <MessagesBox key={i} messageData={messageData} />)
					}
					<MessagesBox messageData={sampleCurrentUser} isCurrentUser={true} />
				</div>
			</section>
			<MessageSendForm onMessageAdd={onMessageAdd}/>
		</>
	);
};

export default ChatContainer;
