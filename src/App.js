import { useState } from 'react';
import { getLandData } from './api';
import './App.css';

function App() {
  const [cadastralNumber, setCadastralNumber] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      const response = await getLandData({ cadastralNumber });
      const data = await response.json();
      setData(JSON.stringify(data, null, 4));
    } catch (error) {
      setError(error.message);
    } finally {
      setIsLoading(false);
      setError(null);
    }
  };

  return (
    <div className="App">
      <div className="container">
        <header className="App-header">
          <h1>Landlord</h1>
        </header>
        <main>
          <form>
            <input
              className="input"
              onChange={(event) => setCadastralNumber(event.target.value)}
              placeholder="Введите кадастровый номер"
            />
            <button
              disabled={isLoading || !cadastralNumber}
              className="button"
              onClick={handleSubmit}
            >
              Получить данные
            </button>
          </form>

          <section className="data">
            {data ? <pre className="json">{data}</pre> : error || 'Нет данных'}
          </section>
        </main>
      </div>
    </div>
  );
}

export default App;
