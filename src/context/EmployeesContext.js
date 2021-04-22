import React, { createContext } from 'react';
import users from './../data/users';

class EmployessStore {
    // Todo: abstract users population into a service.
    employees = users;

    addEmployee = (name, location, pet) => {
        if(!name || !location || !pet) return false;

        this.employees.push({
            id: this.employees.length,
            name,
            location,
            pet,
        });

        return true;
    }
};

const EmployeesContext = createContext({
    employeeStore: new EmployessStore()
});

export default EmployeesContext;