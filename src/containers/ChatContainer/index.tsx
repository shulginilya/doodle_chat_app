import MessageSendForm from '@/components/MessageSendForm';
import MessagesBox from '@/components/MessagesBox';
import styles from './ChatContainer.module.scss';

const ChatContainer: React.FC = () => {
	return (
		<>
			<section data-testid="chat_container" className={styles.chat_container}>
				<div className={styles.chat_container__inside}>
					<MessagesBox />
				</div>
			</section>
			<MessageSendForm />
		</>
	);
};

export default ChatContainer;
