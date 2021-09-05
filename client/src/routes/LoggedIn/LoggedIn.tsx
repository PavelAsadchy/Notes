import { FC, ReactElement, ComponentType } from 'react';
import { connect } from 'react-redux';
import { Route } from 'react-router-dom';
import { AuthState } from '../../_store/types';

type LoggedInProps = {
  exact?: boolean;
  isAuthenticated: boolean | null;
  path: string;
  component: ComponentType<any>;
};

const LoggedInRoute: FC<LoggedInProps> = ({
  component: Component,
  isAuthenticated,
  ...otherProps
}: LoggedInProps): ReactElement => {
  if (isAuthenticated === false) {
    alert('this is a logged in route, you are logged out, redirected to log in');
  }

  return (
    <>
      <header>
        LoggedIn Header
      </header>
      <Route
        render={otherProps => (
          <>
            <Component {...otherProps} />
          </>
        )}
      />
      <footer>
        LoggedIn Footer
      </footer>
    </>
  );
};

const mapStateToProps = (state: AuthState) => ({
  isAuthenticated: state.isLoggedIn
});

export default connect(
  mapStateToProps
)(LoggedInRoute);
