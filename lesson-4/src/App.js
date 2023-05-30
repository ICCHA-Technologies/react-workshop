import './App.css';
import { useState } from 'react'
import CustomButton from './CustomButton';

function App() {
  const [name, setName] = useState('')
  const [counter, setCounter] = useState(0)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  // JS (Javascript) -> JSON (Javascript Object Notation) { "x": 0, "y": 0 }

  // const handleButtonClick = () => alert("Clicked!")

  // const handleButtonClick = () => {
  //   alert("Clicked!")
  // }

  function handleButtonClick() {
    alert("Clicked!")
  }

  function handleInputChange(event) {
    setName(event.target.value)
  }

  function handleMouseMove(event) {
    const { clientX, clientY } = event
    setMousePosition({
      x: clientX,
      y: clientY
    })
  }

  return (
    <div className="App">
      <header className="App-header">
        <label>Enter your name:</label>
        <input type='text' value={name} onChange={handleInputChange}/>
        <br/>
        <label>This is your name: {name}</label>
        <br/>
        <CustomButton label={'Click'} onClick={handleButtonClick} style={{
          color: 'green'
        }} />
        <br/>
        {/* <button onClick={() => alert("Clicked!")}>Click</button> */}
        {/* <button onClick={handleButtonClick}>Click</button> */}
        <div onMouseEnter={() => setCounter(counter + 1)} style={{
          borderStyle: 'solid'
        }}>
          <label>Mouse enter counter: {counter}</label>
        </div>
        <br/>
        <div onMouseMove={handleMouseMove} style={{
          borderStyle: 'solid'
        }}>
          <label>Mouse position: X {mousePosition.x}, Y {mousePosition.y}</label>
        </div>
      </header>
    </div>
  );
}

export default App;
