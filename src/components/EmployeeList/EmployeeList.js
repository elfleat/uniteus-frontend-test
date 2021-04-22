import './employeeList.css';

const EmployeeListItem = ({ employee }) => {
    const { name, location, pet } = employee;

    return (
        <li>
          <span>{name}</span>
          <span>{location}</span>
          <span>{pet}</span>
        </li>
    );
};

const EmployeeList = ({ employees }) => {
  return (
    <div className="employee-list-container">
      <ul>
        {employees.map(employee => <EmployeeListItem key={`${employee.id}+${employee.name}`} employee={employee} />)}
      </ul>
    </div>
  );
};

export default EmployeeList;
