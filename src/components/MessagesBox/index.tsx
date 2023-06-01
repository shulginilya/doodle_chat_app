import styles from './messages_box.module.scss';

const MessagesBox: React.FC = () => {
	return (
		<div data-testid="messages_box" className={styles.messages_box}>
            {/* message UI samples */}
            <div className={styles.messages_box__wrap}>
                <div className={styles.messages_box__item}>
                    <p className={`${styles.messages_box__item__line} ${styles.messages_box__item__name}`}>Patricia</p>
                    <p className={`${styles.messages_box__item__line} ${styles.messages_box__item__text}`}>Sounds good to me</p>
                    <p className={`${styles.messages_box__item__line} ${styles.messages_box__item__date}`}>10 Mar 2018 10:22</p>
                </div>
            </div>
            <div className={`${styles.messages_box__wrap} ${styles.messages_box__wrap__current_user}`}>
                <div className={`${styles.messages_box__item}`}>
                    <p className={`${styles.messages_box__item__line} ${styles.messages_box__item__text}`}>Sounds good to me</p>
                    <p className={`${styles.messages_box__item__line} ${styles.messages_box__item__date}`}>10 Mar 2018 10:22</p>
                </div>
            </div>
		</div>
	);
};

export default MessagesBox;
