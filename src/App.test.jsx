import { render, screen, waitForElementToBeRemoved } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from './App';

//test 1 for loading state
test('the film list renders in a loading state', async () => {
  render(<App />);
  const heading = screen.getByRole('heading');
  expect(screen.getByText(/loading/i)).toBeInTheDocument();
  expect(heading).toBeInTheDocument();

  await waitForElementToBeRemoved(() => screen.getByText(/loading/i));
});

// test 2 test that the api is sending back all film names
test('the api is sending back first film', async () => {
  render(<App />);

  const loading = screen.getByText(/loading/i);
  expect(loading).toBeInTheDocument();

  const films = await screen.findByText(/castle in the sky/i);
  expect(films).toBeInTheDocument();
});

test('search can find films typed in', async () => {
  render(<App />);
  const searchbar = await screen.findByRole('textbox');

  const filmName = 'ponyo';
  userEvent.type(searchbar, filmName);

  const films = await screen.findAllByAltText(filmName, { exact: false });

  const resultNames = films.map((film) => film.alt);

  const handleNameCheck = (name) => name.toLowerCase().includes(filmName);

  const hasSameName = resultNames.every(handleNameCheck);

  expect(hasSameName).toBe(true);
});
