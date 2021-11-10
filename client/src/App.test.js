import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';
import { Provider } from "react-redux";
import {Landing, Home} from './Views/index';
import{ CountryDetail, AddActivity} from './components/index';


// describe 
test('renders learn react link', () => {
 render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  
  expect(linkElement).toBeInTheDocument();
});
