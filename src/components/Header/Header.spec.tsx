import { render, screen } from '@testing-library/react';

import Header from './index';

describe('<Header /> test suite', () => {
    it('Should render the <Header /> component, and it must be visible', () => {
        // we render the component
        render(<Header />);
        const headerRootElement = screen.getByTestId('header');
        expect(headerRootElement).toBeVisible();
    });
});