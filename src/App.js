import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from './components/Home';
import RestatuarentList from './components/RestatuarentList';
import RestatuarentCreate from './components/RestatuarentCreate';
import RestatuarentDetail from './components/RestatuarentDetail';
import RestatuarentUpdate from './components/RestatuarentUpdate';
import RestatuarentSearch from './components/RestatuarentSearch';
import Login from './components/Login';
import Logout from './components/Logout';
import Protected from './components/Protected'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path="/login" render={props=>(
            <Login {...props} />
          )}>
          </Route>
          <Route exact path="/logout" component={Logout} />

          <Protected exact path="/details" component={RestatuarentDetail} />
          <Protected exact path="/update/:id" component={RestatuarentUpdate} />
          <Protected exact path="/search" component={RestatuarentSearch} />
          <Protected exact path="/create" component={RestatuarentCreate} />
          <Protected exact path="/list" component={RestatuarentList} />
          <Protected exact path="/" component={Home} />

        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
