import { render, screen } from '@testing-library/react';

import MessagesBox from './index';

describe('<MessagesBox /> test suite', () => {
    beforeEach(() => {
        render(<MessagesBox />);
    });
    
    it('Should render the <MessagesBox /> component, and must be visible', () => {
        const messagesBoxRootElement = screen.getByTestId('messages_box');
        expect(messagesBoxRootElement).toBeInTheDocument();
    });
});
