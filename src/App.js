import logo from './logo.svg';
import './App.css';
import React, {useState} from "react"



function App() {

  //let counter = 0
  const [counter, setCounter] = useState(0)
  const [inputValue, setInputValue] = useState("Pedro")
  const [showText, setShowText] = useState(true)

  const increment =() => {
    setCounter(counter + 1)
    setShowText(!showText)
    console.log(counter)
  }

  let onChange = (event) => {
    const newValue = event.target.value
    setInputValue(newValue)
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>

        <div>
             {counter} <button onClick={increment}>Increment</button>
             <br></br>
             <input placeholder="enter something..." onChange={onChange} />
             {inputValue}
             <br></br>
             {showText && <p>This is a text</p>}
        </div>

      </header>
    </div>
  );
}

export default App;
