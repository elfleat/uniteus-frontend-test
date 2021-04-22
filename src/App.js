import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import './App.css';
import { Menu } from './components';
import { Employees, AddEmployees } from './pages';
import users from './data/users';
import EmployeesContext from './context/EmployeesContext';

class App extends Component {
  constructor() {
    super();
    this.state = {
      employees: users,
      addEmployee: this.addEmployee
    };
  }

  addEmployee = (name, location, pet) => {
    if (!name || !location || !pet) return false;
    const { employees } = this.state;

    employees.push({
      id: employees.length,
      name,
      location,
      pet,
    });

    this.setState({ employees });
    return true;
  }

  render() {
    return (
      <Router>
        <div className="App">
          <h1>Unite Us</h1>
          <Menu />
          <EmployeesContext.Provider value={this.state}>
            <Switch>
              <Route exact path="/">
                <Employees />
              </Route>
              <Route path="/add">
                <AddEmployees />
              </Route>
            </Switch>
          </EmployeesContext.Provider>

        </div>
      </Router>
    );
  }
};

export default App;
