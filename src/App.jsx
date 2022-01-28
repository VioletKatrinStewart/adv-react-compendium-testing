import './App.css';
import { useEffect, useState } from 'react';
import { getFilms } from './services/films';
import FilmList from './components/FilmList/FilmList';
import Controls from './components/Controls/Controls';

function App() {
  const [films, setFilms] = useState([]);
  const [loading, setLoading] = useState(true);
  const [query, setQuery] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      const data = await getFilms();
      setFilms(data);
      setLoading(false);
    };
    if (loading) {
      fetchData();
    }
  }, [loading]);

  function filterFilms() {
    const filteredFilms = films.filter((films) =>
      films.title.toLowerCase().includes(query.toLowerCase())
    );
    return filteredFilms;
  }

  if (loading) return <h1>loading</h1>;

  return (
    <div className="App">
      <h1>Films By Studio Ghibli</h1>
      <Controls query={query} setQuery={setQuery} />
      <FilmList films={filterFilms()} loading={loading} setLoading={setLoading} />
    </div>
  );
}

export default App;
