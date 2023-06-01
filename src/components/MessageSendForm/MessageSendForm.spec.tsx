import { render, screen } from '@testing-library/react';
import user from '@testing-library/user-event';

import MessageSendForm from './index';

describe('<MessageSendForm /> test suite', () => {
    beforeEach(() => {
        render(<MessageSendForm onMessageAdd={() => {}} />);
    });

    it('Should render the <MessageSendForm /> component, and it must be visible', () => {
        const messageSendFormElement = screen.getByTestId('message_send_form');
        expect(messageSendFormElement).toBeInTheDocument();
    });

    it('form should have text input and submit form', () => {
        const formTextInput = screen.getByTestId('message_form_text_input');
        const formSubmitBtn = screen.getByTestId('message_form_submit_btn');
        expect(formTextInput).toBeInTheDocument();
        expect(formSubmitBtn).toBeInTheDocument();
    });

    // it('make sure that form submitted correctly', () => {
    //     const argList: any = [];
    //     const callback = (...args: any) => {
    //         argList.push(args);
    //     } 
    //     render(<MessageSendForm onMessageAdd={callback} />);
    //     const formTextInput = screen.getByTestId('message_form_text_input');
    //     const formSubmitBtn = screen.getByTestId('message_form_submit_btn');
    //     // we click on text input to get it a focus
    //     user.click(formTextInput);
    //     // we simulate typing
    //     user.keyboard('UnitTestUser');
    //     // we simulate clicking 'Enter' button
    //     user.click(formSubmitBtn);
    //     expect(argList).toHaveLength(1);
    // });

});