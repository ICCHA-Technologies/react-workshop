import './App.css';
import { useEffect, useMemo, useState } from 'react'

function App() {
  const [user, setUser] = useState(null)
  const [clicked, setClicked] = useState(false)
  const [windowWidth, setWindowWidth] = useState(window.innerWidth)

  const fetchUser = async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/users/10')
    const json = await response.json()
    setUser(json)
  }

  const handleResize = () => {
    setWindowWidth(window.innerWidth)
  }
  
  // Runs on every render
  useEffect(() => {
    console.log('useEffect with no dependency array')
  })

  // Runs only the first time the component renders
  useEffect(() => {
    fetchUser()
    console.log('useEffect with dependency array empty')
  }, [])

  // Runs only the first time the component renders and when the dependency changes
  // It can be more than 1 dependency
  useEffect(() => {
    fetchUser()
    console.log('useEffect with 1 dependency')
  }, [clicked])

  // Cleans up after unmounting the component (garbage collector)
  useEffect(() => {
    window.addEventListener('resize', handleResize)
    return () => {
      window.removeEventListener('resize', handleResize)
      console.log('UNMOUNTING')
    }
  }, [])
  
  // Caches the value and re-calculates it only when it changes
  const upperCaseName = useMemo(() => {
    console.log('Running useMemo...')
    return user?.name?.toUpperCase()
  }, [user?.name])

  return (
    <div className="App">
      <header className="App-header">
        <h1>User Details</h1>
        {
          user && (
            <>
              <p>Name: {user.name}</p>
            </>
          )
        }
        <h2>Upper Case Name</h2>
        <p>{upperCaseName}</p>
        <h2>Window Width</h2>
        <p>{windowWidth}</p>
        <button onClick={() => setClicked(true)}>Click!</button>
        <br/>
        <button onClick={fetchUser}>Re-fetch!</button>
      </header>
    </div>
  );
}

export default App;
