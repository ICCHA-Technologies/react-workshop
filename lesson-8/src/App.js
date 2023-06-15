import './App.css';
import Counter from './Counter';
import CounterProvider from './CounterContext';

function App() {
  return (
    <CounterProvider>
      <div className="App">
        <header className="App-header">
          <Counter />
        </header>
      </div>
    </CounterProvider>
  );
}

export default App;
