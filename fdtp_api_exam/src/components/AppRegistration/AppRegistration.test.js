import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import AppRegistration from './AppRegistration';

describe('<AppRegistration />', () => {
  test('it should mount', () => {
    render(<AppRegistration />);
    
    const appRegistration = screen.getByTestId('AppRegistration');

    expect(appRegistration).toBeInTheDocument();
  });
});