import React from 'react';
import './App.css';
import { HashRouter as Router, Route, Switch} from 'react-router-dom';
import CreateAccount from "./Components/CreateAccount";
import 'semantic-ui-css/semantic.min.css';
import { Provider } from 'react-redux';
import store from './redux/store';
import Login from './Components/Login';

function App() {
  return (
      <Provider store={store}>
        <div>
          <Router>
              <Switch>
                  <Route exact path="/register" component={CreateAccount} />
                  <Route exact path="/login" component={Login} />
              </Switch>
          </Router>
        </div>
      </Provider>
  );
}

export default App;
