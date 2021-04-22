import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import './App.css';
import { Menu } from './components';
import { Employees, AddEmployees } from './pages';

const App = () => {
  return (
    <Router>
    <div className="App">
      <h1>Unite Us</h1>
      <Menu />

      <Switch>
          <Route exact path="/">
            <Employees />
          </Route>
          <Route path="/add">
            <AddEmployees />
          </Route>
        </Switch>
    </div>
    </Router>
  );
}

export default App;
