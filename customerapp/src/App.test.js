import { fireEvent, render, screen } from '@testing-library/react';
import App from './App';

// test spec
it('renders header', () => {
  render(<App />);
  const h1Element = screen.getByText(/Customer Application/i);
  expect(h1Element).toBeInTheDocument();
});

it('renders customers', () => {
  // render(<App />);
  // const btns = screen.getAllByRole('button');
  // expect(btns.length).toBe(6);

  // container is a wrapper for document of DOM
  let { container } = render(<App />);
  let btns = container.querySelectorAll('button');
  expect(btns.length).toBe(6);
});

it("delete a customer", () => {
  render(<App />);
  let btns = screen.getAllByRole('button');
  fireEvent.click(btns[3]);
  btns = screen.getAllByRole('button');
  expect(btns.length).toBe(5);
});

it("filter customers", () => {
  render(<App />);
  let txtBox = screen.getByPlaceholderText('search by name');
  fireEvent.change(txtBox, { "target": { "value": "Geller" } });
  // screen.debug(); // VDOM and not DOM
  let btns = screen.getAllByRole('button');
  expect(btns.length).toBe(2);
});