import { FC, ReactElement } from 'react';
import { NavLink } from 'react-router-dom';

const Nav: FC = (): ReactElement => (
  <>
    <ul>
      <li>
        <NavLink to="/">
          Landing
        </NavLink>
      </li>
      <li>
        <NavLink to="/home">
          Home
        </NavLink>
      </li>
      <li>
        <NavLink to="/about">
          About
        </NavLink>
      </li>
      <li>
        <NavLink to="/terms">
          Terms
        </NavLink>
      </li>
      <li>
        <NavLink to="/broken-link">
          Broken Link
        </NavLink>
      </li>
      <li>
        <NavLink to="/log-in">
          Log In
        </NavLink>
      </li>
      <li>
        <NavLink to="/log-out">
          Log Out
        </NavLink>
      </li>
    </ul>
  </>
);

export default Nav;