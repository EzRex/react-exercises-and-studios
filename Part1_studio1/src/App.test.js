import { render, screen } from '@testing-library/react';
import App from './App';

//webnsite https://www.tastesoflizzyt.com/homemade-cinnamon-rolls/
test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
