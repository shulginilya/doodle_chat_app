import { render, screen } from '@testing-library/react';

import ChatContainer from './index';

describe('<ChatContainer /> test suite', () => {
    beforeEach(() => {
        render(<ChatContainer />);
    });
    
    it('Should render the <ChatContainer /> component, and must be visible', () => {
        const chatContainerElement = screen.getByTestId('chat_container');
        expect(chatContainerElement).toBeVisible();
    });
});