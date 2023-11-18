import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {

  const [counter, setCounter] = useState(0);

  return (
    <div className="App" onClick={() => setCounter(counter + 1)}>
      {counter}
    </div>
    <div hidden={counter == 5}>
      El valor es 5
    </div>
  );
}

export default App;
