import { render, screen } from '@testing-library/react';

import MessageSendForm from './index';

describe('<MessageSendForm /> test suite', () => {
    beforeEach(() => {
        render(<MessageSendForm />);
    });

    it('Should render the <MessageSendForm /> component, and it must be visible', () => {
        const messageSendFormElement = screen.getByTestId('message_send_form');
        expect(messageSendFormElement).toBeVisible();
    });

    it('form should have text input and submit form', () => {
        const formTextInput = screen.getByTestId('message_form_text_input');
        const formSubmitBtn = screen.getByTestId('message_form_submit_btn');
        expect(formTextInput).toBeVisible();
        expect(formSubmitBtn).toBeVisible();
    });
});