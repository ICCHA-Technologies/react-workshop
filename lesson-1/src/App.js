import logo from './logo.svg'
import './App.css'
import { useState, useEffect } from 'react'

function App() {
  const [username, setUsername] = useState('Joe')
  const [movieTitle, setMovieTitle] = useState('')

  const fetchMovieTitle = async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/todos/1')
    const json = await response.json()
    setMovieTitle(json.title)
  }

  // Fetch the movie title as soon as the component has been rendered
  useEffect(() => {
    fetchMovieTitle()  
  })

  const handleJoeClick = () => {
    setUsername('Joe')
  }

  const handleJaneClick = () => {
    setUsername('Jane')
  }

  // Conditional rendering can also be performed outside of the return statement
  // const color = Title === 'Adrian' ? 'red' : 'blue'

  return (
    <div className="App">
      <header className="App-header">
        <h1 style={{ color: username === 'Jane' ? 'pink' : 'lightblue' }}>🎞️ ICCHA Cinema 🎞️</h1>
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Hello {username}
        </p>
        <p>
          You're watching "{movieTitle}", enjoy! 🍿
        </p>
        <br/>
        <button onClick={handleJoeClick}>Set user to Joe</button>
        <br/>
        <button onClick={handleJaneClick}>Set user to Jane</button>
      </header>
    </div>
  );
}

export default App;
