import { render, screen } from '@testing-library/react';

import ChatContainer from './index';

global.fetch = require('jest-fetch-mock');

describe('<ChatContainer /> test suite', () => {    
    it('Should render the <ChatContainer /> component, and must be visible', async () => {
        render(<ChatContainer />);
        const chatContainerElement = screen.getByTestId('chat_container');
        expect(chatContainerElement).toBeInTheDocument();
    });
});