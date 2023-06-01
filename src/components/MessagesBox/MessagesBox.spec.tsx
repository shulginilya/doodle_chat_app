import { render, screen } from '@testing-library/react';
import { MessageItemType } from '@/types';

import MessagesBox from './index';

describe('<MessagesBox /> test suite', () => {
    beforeEach(() => {
        const sample: MessageItemType = {
            message: 'test',
            author: 'test',
            timestamp: 1521096352339
        };
        render(<MessagesBox messageData={sample} />);
    });
    
    it('Should render the <MessagesBox /> component, and must be visible', () => {
        const messagesBoxRootElement = screen.getByTestId('messages_box');
        expect(messagesBoxRootElement).toBeInTheDocument();
    });
});
