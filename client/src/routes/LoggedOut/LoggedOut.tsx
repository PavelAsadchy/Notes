import { FC, ReactElement, ComponentType } from 'react';
import { connect } from 'react-redux';
import { Route } from 'react-router-dom';
import { AuthState } from '../../_store/types';

type LoggedOutProps = {
  exact?: boolean;
  isAuthenticated: boolean | null;
  path: string;
  component: ComponentType<any>;
};

const LoggedOutRoute: FC<LoggedOutProps> = ({
  component: Component,
  isAuthenticated,
  ...otherProps
}: LoggedOutProps): ReactElement => {
  if (isAuthenticated) {
    alert("this is a logged out route, you are logged in, redirected to home page");
  }

  return (
    <>
      <header>
        LoggedOut Header
      </header>
      <Route render={otherProps => (
        <>
          <Component {...otherProps} />
        </>
      )} />
      <footer>
        LoggedOut Footer
      </footer>
    </>
  );
};

const mapStateToProps = (state: AuthState) => ({
  isAuthenticated: state.isLoggedIn
});

export default connect(
  mapStateToProps
)(LoggedOutRoute);
