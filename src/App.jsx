import './App.css';
import { useEffect, useState } from 'react';
import { getFilms } from './services/films';
import FilmList from './components/FilmList/FilmList';
import Controls from './components/Controls/Controls';

function App() {
  const [films, setFilms] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const data = await getFilms();
      console.log(data);
      setFilms(data);
      setLoading(false);
    };
    if (loading) {
      fetchData();
    }
  }, [loading]);

  if (loading) return <h1>LOADING</h1>;

  return (
    <div className="App">
      <h1>Films By Studio Ghibli</h1>
      <Controls />
      <FilmList films={films} loading={loading} />
    </div>
  );
}

export default App;
