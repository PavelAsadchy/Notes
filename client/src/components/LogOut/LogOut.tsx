import { FC, ReactElement } from 'react';
import { connect } from 'react-redux';
import { logOut } from '../../_store/actions/auth.actions';

type LogOutProps = {
  logOutConnect: () => void;
};

const LogOut: FC<LogOutProps> = ({
  logOutConnect
}: LogOutProps): ReactElement => (
  <>
    <p>Logout page</p>
    <button onClick={logOutConnect}>
      Log me out
    </button>
  </>
);

const mapDispatchToProps = {
  logOutConnect: logOut
};

export default connect(
  null,
  mapDispatchToProps,
)(LogOut);