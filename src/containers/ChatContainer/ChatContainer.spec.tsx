import { render, screen } from '@testing-library/react';

import ChatContainer from './index';

global.fetch = require('jest-fetch-mock');

describe('<ChatContainer /> test suite', () => {
    beforeEach(() => {
        render(<ChatContainer />);
    });
    
    it('Should render the <ChatContainer /> component, and must be visible', () => {
        const chatContainerElement = screen.getByTestId('chat_container');
        expect(chatContainerElement).toBeInTheDocument();
    });
});