import React from 'react';
import { Route, Switch } from 'react-router-dom';
// components
import Main from './pages/Main/Main';
import TaskPage from './pages/TaskPage/TaskPage';
import NotFoundPage from './pages/NotFoundPage/NotFoundPage';

const App: React.FC = () => {
  return (
    <Switch>
      <Route exact path={["/", "/tasks_chart"]} component={Main} />
      <Route
        path="/task/:number"
        render={({ match }) => {
          const { number } = match.params;

          return <TaskPage number={number} />;
        }}
      />

      <Route render={() => <NotFoundPage />} />
    </Switch>
  );
};

export default App;
