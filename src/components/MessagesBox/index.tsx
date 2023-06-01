import { timestampToDate } from '@/utils/commonUtils';
import { MessageItemType } from '@/types';
import styles from './messages_box.module.scss';

interface MessagesBoxType {
    messageData: MessageItemType;
    isCurrentUser?: boolean;
};

const MessagesBox: React.FC<MessagesBoxType> = ({
    messageData,
    isCurrentUser = false
}) => {
    const messageBoxClass = isCurrentUser ? `${styles.messages_box} ${styles.messages_box__current_user}` : styles.messages_box;
	return (
		<div data-testid="messages_box" className={messageBoxClass}>
            <div className={styles.messages_box__item}>
                {
                    !isCurrentUser && (
                        <p className={`${styles.messages_box__item__line} ${styles.messages_box__item__name}`}>{messageData.author}</p>
                    )
                }
                <p className={`${styles.messages_box__item__line} ${styles.messages_box__item__text}`}>{messageData.message}</p>
                <p className={`${styles.messages_box__item__line} ${styles.messages_box__item__date}`}>{timestampToDate(messageData.timestamp)}</p>
            </div>
		</div>
	);
};

export default MessagesBox;
