import MessageSendForm from '@/components/MessageSendForm';
import styles from './ChatContainer.module.scss';

const ChatContainer: React.FC = () => {
	return (
		<>
			<section data-testid="chat_container" className={styles.chat_container} />
			<MessageSendForm />
		</>
	);
};

export default ChatContainer;
