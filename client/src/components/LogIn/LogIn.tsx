import { FC, ReactElement } from 'react';
import { connect } from 'react-redux';
import { logIn } from '../../_store/actions/auth.actions';

type LogInProps = {
  logInConnect: () => void;
};

const LogIn: FC<LogInProps> = ({
  logInConnect
}: LogInProps): ReactElement => (
  <>
    <p>Login page</p>
    <button onClick={logInConnect}>
      Log me in
    </button>
  </>
);

const mapDispatchToProps = {
  logInConnect: logIn
};

export default connect(
  null,
  mapDispatchToProps,
)(LogIn);