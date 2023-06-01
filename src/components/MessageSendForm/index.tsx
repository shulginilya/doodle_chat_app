import { useState } from 'react';
import styles from './message_send_form.module.scss';

interface MessageSendFormType {
    onMessageAdd: (str: string) => void;
};

const MessageSendForm: React.FC<MessageSendFormType> = ({
    onMessageAdd
}) => {
    const [message, setMessage] = useState('');

    const submit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        setMessage('');
        onMessageAdd(message);
    };

    const updateMessageForm = (event: React.SyntheticEvent) => {
		const targetElement = event.target as HTMLFormElement;
        const value = targetElement.value;
        setMessage(value);
	};

    return (
        <>
            {/* @ts-ignore */}
            <div className={styles.message_send_form_wrap} onSubmit={submit}>
                <form
                    data-testid="message_send_form"
                    className={styles.message_send_form}
                >
                    <div className={styles.message_send_form__input}>
                        <input
                            type='text'
                            placeholder='Message'
                            value={message}
                            className={styles.message_send_form__input__field}
                            data-testid="message_form_text_input"
                            onChange={(e) => updateMessageForm(e)}
                        />
                    </div>
                    <button
                        type='submit'
                        data-testid="message_form_submit_btn"
                        className={styles.message_send_form__btn}
                    >
                        Send
                    </button>
                </form>
            </div>
        </>
    );
};

export default MessageSendForm;
