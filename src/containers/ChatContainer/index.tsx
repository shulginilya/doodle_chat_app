import { useState, useEffect, useRef } from 'react';
import MessageSendForm from '@/components/MessageSendForm';
import MessagesBox from '@/components/MessagesBox';
import { makeRequest } from '@/utils/requestUtil';
import { generateUniqueUsername } from '@/utils/commonUtils'; 
import { commonConfig } from '@/configs/common';
import { MessageItemType } from '@/types';
import styles from './ChatContainer.module.scss';

interface MessageServerItemType extends MessageItemType {
	token: string;
	_id: string;
};

const ChatContainer: React.FC = () => {
	const chatWindowRef = useRef<HTMLInputElement>(null);
	const [localMessageItems, setLocalMessageItems] = useState<MessageItemType[] | []>([]);
	/*
		Callback after we add a new message
	*/
	const onMessageAdd = async (message: string): Promise<void> => {
		const username = localStorage.getItem('username');
		if (username) {
			const response = await makeRequest({
				url: '',
				params: {
					message,
					author: username
				},
				method: 'POST'
			});
			if (response) {
				const { message, author, timestamp } = response;
				const freshStateObject = { message, author, timestamp: parseInt(timestamp) };
				const localMessageItemsCopy = JSON.parse(JSON.stringify(localMessageItems));
				localMessageItemsCopy.push(freshStateObject);
				setLocalMessageItems(localMessageItemsCopy);
				// scroll programmatically to the bottom of the chat
				if (chatWindowRef.current) {
					chatWindowRef.current.scrollTop = chatWindowRef.current.scrollHeight;
				}
			}
		}
	};

	/*
		Get messages from the server
	*/
	const getMessagesFromServer = async () => {
		const messages = await makeRequest({
			url: `/?since=${commonConfig.startTs}&limit=${commonConfig.messagesPerPage}`
		});
		if (messages) {
			const serverMessages = messages.map(({message, author, timestamp}: MessageServerItemType) => ({ message, author, timestamp }));
			setLocalMessageItems(serverMessages);
		}
	};

	useEffect(() => {
		getMessagesFromServer();
		/*
			Generate username and store it in a localStorage , if it is not existed
		*/
		if (!localStorage.getItem('username')) {
			const uniqueUsername = generateUniqueUsername();
			localStorage.setItem('username', uniqueUsername);
		}
	}, []);

	/*
		Render the component
	*/
	return (
		<>
			<section data-testid="chat_container" className={styles.chat_container}>
				<div className={styles.chat_container__inside} ref={chatWindowRef}>
					{
						localMessageItems.map((messageData, i) => <MessagesBox key={i} messageData={messageData} />)
					}
				</div>
			</section>
			<MessageSendForm onMessageAdd={onMessageAdd}/>
		</>
	);
};

export default ChatContainer;
