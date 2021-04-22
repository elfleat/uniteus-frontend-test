import React, { useState } from 'react';
import EmployeesContext from './../../context/EmployeesContext';
import { EmployeeList, Input } from './../../components';
import './employees.css';

const employeeFilter = (employee, filter) => {
    let result = false;
    Object.values(employee).forEach(value => {
        if (typeof value === "string" && value.toLowerCase().includes(filter.toLowerCase()))  {
            result = true;
        }
    });
    return result;
};

const Employees = () => {
    const [filter, setFilter] = useState("");
    
    return (
        <EmployeesContext.Consumer>
            {({ employees }) => (
                <div className="page-container-employees">
                    <div className="filter-container">
                        <Input className="filter-input" value={filter} placeholder="Search by name" onChange={setFilter} />
                    </div>
                    
                    <EmployeeList employees={!filter.length ? employees : employees.filter(e => employeeFilter(e, filter))} />

                    {filter.length && !employees.filter(e => employeeFilter(e, filter)).length ? (
                        <>
                            Ooops... No records match your search. <a href="#" onClick={() => setFilter("")}>Try again</a>. <br />
                        </>
                    ) : <></>}
                </div>
            )}
        </EmployeesContext.Consumer>
    );
};

export default Employees;
