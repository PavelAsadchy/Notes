import { FC, ReactElement } from 'react';
import { Route, Switch } from 'react-router-dom';

import LoggedInRoute from '../../routes/LoggedIn/LoggedIn';
import LoggedOutRoute from '../../routes/LoggedOut/LoggedOut';

import Landing from '../Landing/Landing';
import About from '../About/About';
import Home from '../Home/Home';
import LogIn from '../LogIn/LogIn';
import LogOut from '../LogOut/LogOut';
import Terms from '../Terms/Terms';
import NotFound from '../NotFound/NotFound';

const Pages: FC = (): ReactElement => (
  <Switch>
    <LoggedOutRoute path="/" exact={true} component={Landing} />
    <LoggedOutRoute path="/about" exact={true} component={About} />
    <LoggedOutRoute path="/log-in" exact={true} component={LogIn} />
    <LoggedInRoute path="/log-out" exact={true} component={LogOut} />
    <LoggedInRoute path="/home" exact={true} component={Home} />
    <Route path="/terms" exact={true} component={Terms} />
  <Route component={NotFound} />
  </Switch>
);

export default Pages;