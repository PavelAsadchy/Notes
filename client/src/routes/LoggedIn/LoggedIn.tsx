import { FC, ReactElement, ComponentType } from 'react';
import { Route } from 'react-router-dom';

type LoggedInProps = {
  exact?: boolean;
  path: string;
  component: ComponentType<any>;
};

const LoggedInRoute: FC<LoggedInProps> = ({
  component: Component,
  ...otherProps
}: LoggedInProps): ReactElement => (
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

export default LoggedInRoute;