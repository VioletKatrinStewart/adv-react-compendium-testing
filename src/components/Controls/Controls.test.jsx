import Controls from './Controls';
import { render, screen } from '@testing-library/react';

//test 3 that search bar loads
test('the controls are loaded properly', async () => {
  render(<Controls />);

  const searchInput = await screen.findByRole('textbox');

  expect(searchInput).toBeInTheDocument();
});
