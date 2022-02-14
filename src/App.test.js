import { render, screen } from '@testing-library/react';
import App from './App';
import Form from './components/Form'

test('renders header', () => {
  render(<App />);
  const element = screen.getByRole("textbox");
  expect(element).toBeInTheDocument();
});


test('add button is in the document', () => {
  render(<Form />)
  const button = screen.getByText("add")
  expect(button).toBeInTheDocument()
})

test("input element is in the document", () => {
  render(<App />)
  const input = screen.getByPlaceholderText("Add an item...")
  expect(input).toBeInTheDocument()
})