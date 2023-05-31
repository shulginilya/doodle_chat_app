import { render, screen } from '@testing-library/react';

import Footer from './index';

describe('<Footer /> test suite', () => {
    it('Should render the <Footer /> component, and it must be visible', () => {
        // we render the component
        render(<Footer />);
        const footerRootElement = screen.getByTestId('footer');
        expect(footerRootElement).toBeVisible();
    });

});
