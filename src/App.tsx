import React from 'react';
import { Route, Switch } from 'react-router-dom';
// redux
import { store } from './store';
import { setActiveTab } from './store/actions/tabsActions';
// components
import Main from './pages/Main/Main';
import TaskPage from './pages/TaskPage/TaskPage';
import NotFoundPage from './pages/NotFoundPage/NotFoundPage';

const App: React.FC = () => {
  return (
    <Switch>
      <Route exact path="/" component={Main} />
      <Route
        exact
        path="/tasks_chart"
        render={() => {
          store.dispatch(setActiveTab('TASKS_CHART'));

          return <Main />;
        }}
      />
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
