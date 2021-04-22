import { NavLink } from "react-router-dom";
import './Menu.css';

const MenuItem = ({ to, label }) => {
    return (
        <li>
          <NavLink exact to={to}>{label}</NavLink>
        </li>
    );
};

const Menu = () => {
  return (
    <div className="menu-container">
      <ul>
        <MenuItem active={true} to="/" label="Employees" />
        <MenuItem to="/add" label="Add Employee" />
      </ul>
    </div>
  );
};

export default Menu;
