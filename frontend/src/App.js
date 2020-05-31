import React from 'react';
import './App.css';
import { HashRouter as Router, Route, Switch} from 'react-router-dom';
import CreateAccount from "./Components/CreateAccount";
import 'semantic-ui-css/semantic.min.css'

function App() {
  return (
    <div>
      <Router>
          <Switch>
              <Route exact path="/register" component={CreateAccount} />
          </Switch>
      </Router>
    </div>
  );
}

export default App;
