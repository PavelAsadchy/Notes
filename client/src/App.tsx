import { FC, ReactElement, useEffect } from 'react';
import { connect } from 'react-redux';
import { Route, BrowserRouter as Router } from 'react-router-dom';
// import history from './history';
// import Auth from './components/Auth/Auth';
import Nav from './components/Nav/Nav';
import Pages from './components/Pages/Pages';
import { checkAuthentication } from './_store/actions/auth.actions';
import { AuthState } from './_store/types';

type AppProps = {
  checkAuthenticationConnect: () => void;
  isAuthenticated: boolean | null;
};

const App: FC<AppProps> = ({
  checkAuthenticationConnect,
  isAuthenticated
}: AppProps): ReactElement => {
  useEffect(() => {
    checkAuthenticationConnect();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const app = isAuthenticated !== null ? (
    <Router>
      <Nav />
      <Route component={Pages} />
    </Router>
  ) : null;

  return (
    <>
      {app}
    </>
  );
}

const mapStateToProps = (state: AuthState) => ({
  isAuthenticated: state.isLoggedIn
});

const mapDispatchToProps = {
  checkAuthenticationConnect: checkAuthentication
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(App);
