import React from 'react';
import { Route } from 'react-router-dom';
import './App.css';
import Main from './pages/Main/Main';
import TaskPage from './pages/TaskPage/TaskPage';

const App: React.FC = () => {
  return (
    <>
      <Route exact path="/" component={Main} />
      <Route
        path="/task/:number"
        render={({ match }) => {
          const { number } = match.params;

          return <TaskPage number={number} />;
        }}
      />
    </>
  );
};

export default App;
