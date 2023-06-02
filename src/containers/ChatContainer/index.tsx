import { useState, useEffect, useRef } from 'react';
import { flushSync } from 'react-dom';
import MessageSendForm from '@/components/MessageSendForm';
import Header from '@/components/Header';
import MessagesBox from '@/components/MessagesBox';
import { makeRequest } from '@/utils/requestUtil';
import { generateUniqueUsername, getUsername } from '@/utils/commonUtils'; 
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
		Refresh chat history
	*/
	const refreshChat = () => {
		console.log('refresh chat');
		paginateChat();
		scrollToTheBottom();
	};
	/*
		Paginate chat history
	*/
	const paginateChat = () => {
		const latestMessage = localMessageItems[localMessageItems.length - 1];
		if (latestMessage) {
			getMessagesFromServer(latestMessage.timestamp);
		}
	};
	/*
		Scroll to the bottom of the chat
	*/
	const scrollToTheBottom = () => {
		if (chatWindowRef.current) {
			chatWindowRef.current.scrollTop = chatWindowRef.current.scrollHeight;
		}
	};
	/*
		We detect when user reach the end of the scroll area
		And we load more messages
	*/
	const onScrollHandler = () => {
		const chatWindow = chatWindowRef.current;
		if (chatWindow) {
			if (chatWindow.scrollTop === chatWindow.scrollHeight - chatWindow.clientHeight) {
				paginateChat();
			}
		}
	};
	/*
		Callback after we add a new message
	*/
	const onMessageAdd = async (message: string): Promise<void> => {
		const username = getUsername();
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
				const freshStateObject: MessageItemType = { message, author, timestamp: parseInt(timestamp) };
				const localMessageItemsCopy = JSON.parse(JSON.stringify(localMessageItems));
				localMessageItemsCopy.push(freshStateObject);
				flushSync(() => setLocalMessageItems(localMessageItemsCopy));
				scrollToTheBottom();
			}
		}
	};
	/*
		Get messages from the server
	*/
	const getMessagesFromServer = async (startTimestamp: number = commonConfig.startTs) => {
		const messages = await makeRequest({
			url: `/?since=${startTimestamp}&limit=${commonConfig.messagesPerPage}`
		});
		if (messages) {
			const serverMessages = messages.map(({message, author, timestamp}: MessageServerItemType) => ({ message, author, timestamp }));
			flushSync(() => setLocalMessageItems(localMessageItemsPrev => localMessageItemsPrev.concat(serverMessages)));
		}
	};
	useEffect(() => {
		getMessagesFromServer();
		/*
			Generate username and store it in a localStorage , if it is not existed
		*/
		if (!getUsername()) {
			const uniqueUsername = generateUniqueUsername();
			localStorage.setItem('username', uniqueUsername);
		}
	}, []);
	/*
		Render the component
	*/
	return (
		<>
			<Header refreshChat={refreshChat} />
			<section data-testid="chat_container" className={styles.chat_container}>
				<div className={styles.chat_container__inside} ref={chatWindowRef} onScroll={onScrollHandler}>
					{
						localMessageItems.map((messageData, i) => <MessagesBox key={i} messageData={messageData} isCurrentUser={messageData.author === getUsername()} />)
					}
				</div>
			</section>
			<MessageSendForm onMessageAdd={onMessageAdd}/>
		</>
	);
};

export default ChatContainer;
