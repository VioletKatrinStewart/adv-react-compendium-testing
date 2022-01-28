import { render, screen, waitFor, waitForElementToBeRemoved } from '@testing-library/react';
// import userEvent from '@testing-library/user-event';
import App from './App';

//test 1 for loading state
test('the film list renders in a loading state', async () => {
  render(<App />);
  const heading = screen.getByRole('heading');
  //ask about name: Films i

  expect(screen.getByText(/loading/i)).toBeInTheDocument();
  expect(heading).toBeInTheDocument();

  await waitForElementToBeRemoved(() => screen.getByText(/loading/i));
});
// test 2 test that the api is sending back film name, img, director, description

test('the api is sending back film name', async () => {
  render(<App />);

  const loading = screen.getByText(/loading/i);
  expect(loading).toBeInTheDocument();

  const films = await screen
    .findAllByRole
    // what is role of p tag?
    ();
  expect(films).toHaveLength(22);
});

//test 3 that search bar loads
