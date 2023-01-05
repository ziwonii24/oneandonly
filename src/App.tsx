import React from 'react';
import { Switch, Route } from 'react-router-dom';
import './App.css';
import CommingSoon from './components/CommingSoon';
import RouterTest from './components/RouterTest';

const App: React.FC = () => {
  return (
    <div className="App">
      <main className="App-main">
        <Switch>
          <Route exact path="/" component={CommingSoon} />
          <Route path="/test" component={RouterTest} />
        </Switch>
      </main>
    </div>
  );
};

export default App;
