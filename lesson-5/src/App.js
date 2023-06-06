import './App.css';
import { useState } from 'react'

function App() {
  const [user, setUser] = useState(null)
  const [username, setUsername] = useState('')
  const [accountType, setAccountType] = useState('')

  const onLoginHandler = () => {
    setUser({
      username,
      accountType
    })
  }

  const onChangeHandler = ({ target }) => {
    switch (target.name) {
      case "username":
        setUsername(target.value)
        break;

      case "accountType":
        setAccountType(target.value)
        break;
    
      default:
        break;
    }
  }

  const onLogoutHandler = () => setUser(null)

  let message;

  if (user) {
    message = <p>Welcome back, {user.username}</p>
  } else {
    message = <p>Please log in.</p>
  }

  let privilegeMessage;

  switch (user?.accountType) {
    case "admin":
      privilegeMessage = <p>You have admin privileges.</p>
      break;
    case "user":
      privilegeMessage = <p>You are a standard user.</p>
      break;
  
    default:
      privilegeMessage = <p>Please log in to view your account type.</p>
      break;
  }

  return (
    <div className="App">
      <header className="App-header">
        <div>
          <input 
            name="username" 
            type="text"
            onChange={onChangeHandler} 
            placeholder="Enter username" 
            value={username} 
          />
          <input 
            name="accountType" 
            type="text" 
            onChange={onChangeHandler}
            placeholder="Enter account type" 
            value={accountType} 
          />

          {!user && <button onClick={onLoginHandler}>Login</button>}
          {user && <button onClick={onLogoutHandler}>Logout</button>}

          {user ? <p>Logged in as: {user?.username}</p> : <p>Not logged in</p>}

          {message}
          {privilegeMessage}

        </div>
      </header>
    </div>
  );
}

export default App;
