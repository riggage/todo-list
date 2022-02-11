import { render, screen } from '@testing-library/react';
// import App from './App';
import Form from './components/Form'

test('renders heading', () => {
  render(<Form />);
  const element = screen.getAllByRole("button")
  expect(element).toBeInTheDocument();
});
