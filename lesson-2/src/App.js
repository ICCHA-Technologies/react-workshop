import './App.css';

import { useState } from 'react'
import UserList from './components/UserList';
import Statistics from './components/Statistics';

function App() { // Parent Component
  const [showStats, setShowStats] = useState(false)
  const [averageAge, setAverageAge] = useState(0)

  const users = [
    { id: 1, name: 'John', age: 30 },
    { id: 2, name: 'Jane', age: 40 },
    { id: 3, name: 'Bob', age: 50 },
    { id: 4, name: 'Adrian', age: 60 },
  ]

  const onShowStats = () => {
    const ageSum = users.reduce((sum, user) => sum + user.age, 0)
    const averageAge = ageSum / users.length
    
    setAverageAge(averageAge)
    setShowStats(true)
  }  

  return (
    <div className="App">
      <header className="App-header">
        <UserList title="Students" users={users} />
        { showStats && <Statistics totalUsers={users.length} averageAge={averageAge}/> }
        <br/>
        <button onClick={onShowStats}>Show Stats</button>
      </header>
    </div>
  );
}

export default App;
