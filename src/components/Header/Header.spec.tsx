import { render, screen } from '@testing-library/react';

import Header from './index';

describe('<Header /> test suite', () => {
    beforeEach(() => {
        render(<Header />);
    });

    it('Should render the <Header /> component, and it must be visible', () => {
        const headerRootElement = screen.getByTestId('header');
        expect(headerRootElement).toBeVisible();
    });
});