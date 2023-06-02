import { render, screen } from '@testing-library/react';

import Header from './index';

describe('<Header /> test suite', () => {
    beforeEach(() => {
        render(<Header refreshChat={() => {}} />);
    });

    it('Should render the <Header /> component, and it must be visible', () => {
        const headerRootElement = screen.getByTestId('header');
        expect(headerRootElement).toBeInTheDocument();
    });

    it('Username should be shown', () => {
        const usernameTitleElement = screen.getByTestId('username_title');
        expect(usernameTitleElement).toBeInTheDocument();
    });
});
