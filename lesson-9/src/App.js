import './App.css';
import useFetch from './hooks/useFetch.hook';

function App() {
  const { data, error, loading } = useFetch('https://jsonplaceholder.typicode.com/users/1')

  if (loading) return <p>Loading...</p>
  if (error) return <p>Error: {error.message}</p>

  return (
    <div className="App">
      <header className="App-header">
        <h1>{ data ? data.name : 'No user data'}</h1>
        <p>{ data ? data.email : 'No user data'}</p>
      </header>
    </div>
  );
}

export default App;
