import React from 'react';
import './App.css';
import TimerTable from './components/Table/Table';
import Timer from './components/Timer/Timer';

function App() {
  return (
    <div className="App">
      <h1>BroTracker task</h1>
      <Timer />
      <TimerTable />

    </div>
  );
}

export default App;
