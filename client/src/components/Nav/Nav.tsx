import { FC, ReactElement } from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { AuthState } from '../../_store/types';

type NavProps = {
  isAuthenticated: boolean | null;
  uuid: string | null;
};

const Nav: FC<NavProps> = ({
  isAuthenticated,
  uuid
}: NavProps): ReactElement => {
  const logInOut = isAuthenticated ? (
    <li>
      <NavLink to="/log-out">
        Log Out
      </NavLink>
    </li>
  ) : (
    <li>
      <NavLink to="/log-in">
        Log In
      </NavLink>
    </li>
  );

  const mainLinks = isAuthenticated ? (
    <li>
      <NavLink to="/home">
        Home
      </NavLink>
    </li>
  ) : (
    <>
      <li>
        <NavLink to="/">
          Landing
        </NavLink>
      </li>
      <li>
        <NavLink to="/about">
          About
        </NavLink>
      </li>
    </>
  );

  return (
    <>
      <p>
        Auth state:
        {isAuthenticated
            ? `Logged in user: ${uuid}`
            : 'Logged out'}
      </p>
      <ul>
        {mainLinks}
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
        {logInOut}
      </ul>
    </>
  );
};

const mapStateToProps = (state: AuthState) => ({
  isAuthenticated: state.isLoggedIn,
  uuid: state.user
});

export default connect(
  mapStateToProps
)(Nav);
