import { FC, ReactElement, ComponentType } from 'react';
import { Route } from 'react-router-dom';

type LoggedOutProps = {
  exact?: boolean;
  path: string;
  component: ComponentType<any>;
};

const LoggedOutRoute: FC<LoggedOutProps> = ({
  component: Component,
  ...otherProps
}: LoggedOutProps): ReactElement => (
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

export default LoggedOutRoute;