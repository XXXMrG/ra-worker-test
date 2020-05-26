import React from 'react';
import { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import * as Comlink from 'comlink';

const testWorker = Comlink.wrap(
  new Worker('./util/test.worker.js', { type: 'module' })
);
function App() {
  const [data, setData] = useState('');
  const handleData = async () => {
    const result = await testWorker.runTask(1, 2);
    setData(result);
  }
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>{data}</p>
        <button onClick={handleData}>Learn React</button>
      </header>
    </div>
  );
}

export default App;
