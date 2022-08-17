import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import AppTable from './AppTable';

describe('<AppTable />', () => {
  test('it should mount', () => {
    render(<AppTable />);
    
    const appTable = screen.getByTestId('AppTable');

    expect(appTable).toBeInTheDocument();
  });
});