import React from 'react';
import { render, screen } from '@testing-library/react';
import App from '../App';
import userEvent from '@testing-library/user-event';

describe('Testing Main page', () => {
  it('Should render all elements in main page correctly', async () => {
  render(<App />);
  const img = screen.getByRole('img', {
    name: /starwars/i
  })
  const planetInput = screen.getByTestId('name-filter');
  const columnInput = screen.getByTestId('column-filter');
  const comparisonInput = screen.getByTestId('comparison-filter');
  const valueInput = screen.getByTestId('value-filter');
  const filterBtn = screen.getByTestId('button-filter');

  expect(img).toBeInTheDocument();
  expect(planetInput).toBeInTheDocument();
  expect(columnInput).toBeInTheDocument();
  expect(comparisonInput).toBeInTheDocument();
  expect(valueInput).toBeInTheDocument();
  expect(filterBtn).toBeInTheDocument();

  expect(await screen.findByText(/tatooine/i)).toBeInTheDocument();

  userEvent.type(planetInput,'ta');
  expect(await screen.findByText(/tatooine/i)).toBeInTheDocument();

  });

  it('Should render all elements filtered', async () => {
    render(<App />);
    
    const columnInput = screen.getByTestId('column-filter');
    const comparisonInput = screen.getByTestId('comparison-filter');
    const valueInput = screen.getByTestId('value-filter');
    const filterBtn = screen.getByTestId('button-filter');
  

    expect(columnInput).toBeInTheDocument();
    expect(comparisonInput).toBeInTheDocument();
    expect(valueInput).toBeInTheDocument();
    expect(filterBtn).toBeInTheDocument();
  
    expect(await screen.findByText(/tatooine/i)).toBeInTheDocument();
  
    userEvent.selectOptions(columnInput, 'rotation_period');
    userEvent.selectOptions(comparisonInput, 'igual a');
    userEvent.type(valueInput, '23');
    userEvent.click(filterBtn);
    expect(await screen.findByText(/tatooine/i)).toBeInTheDocument();
    expect(await screen.findByText(/Hoth/i)).toBeInTheDocument();
    expect(await screen.findByText(/dagobah/i)).toBeInTheDocument();
  
    });
});
