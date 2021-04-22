import EmployeesContext from './../../context/EmployeesContext';

const Employees = () => {
  return (
    <EmployeesContext.Consumer>
        {({ employeeStore }) => (
            <div className="page-container-employees">
                <h3>Employees Page</h3>
                {employeeStore.employees.map(employee => (<p key={employee.id}>{employee.name}</p>))}
            </div>
        )}
    </EmployeesContext.Consumer>
  );
};

export default Employees;
