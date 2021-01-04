import React from 'react';
import { Route } from 'react-router-dom';
import './App.css';
import Main from './pages/Main/Main';

const App: React.FC = () => {
  return (
    <>
      <Route exact path="/" component={Main} />
      <Route path="/task/:number" />
    </>
  );
};

export default App;
