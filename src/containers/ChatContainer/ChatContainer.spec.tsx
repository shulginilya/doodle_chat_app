import { render, screen } from '@testing-library/react';

import ChatContainer from './index';

describe('<ChatContainer /> test suite', () => {
    it('Should render the <ChatContainer /> component, and must be visible', () => {
        // we render the component
        render(<ChatContainer />);
        const chatContainerElement = screen.getByTestId('chat_container');
        expect(chatContainerElement).toBeVisible();
    });
});