import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import CreateAccount from "./components/auth/CreateAccount";
import 'semantic-ui-css/semantic.min.css';
import { Provider } from 'react-redux';
import { store, persistor } from './redux/store';
import { PersistGate } from 'redux-persist/integration/react';
import Login from './components/auth/Login';
import Birds from "./views/Birds";
import PersistLoader from "./components/loader/Loader";

function App() {
  return (
      <Provider store={store}>
          {/*TODO add loading component*/}
          <PersistGate loading={<PersistLoader/>} persistor={persistor}>
            <div>
              <Router>
                  <Switch>
                      <Route exact path="/register" component={CreateAccount} />
                      <Route exact path="/login" component={Login} />
                      <Route exact path="/" component={Birds} />
                  </Switch>
              </Router>
            </div>
          </PersistGate>
      </Provider>
  );
}

export default App;
