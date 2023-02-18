import { connect } from 'react-redux';
import { login } from '../redux/actions/authActions';

const Login = ({ login }) => {
  const handleLogin = (event) => {
    event.preventDefault();
    const user = {
      username: 'test',
      password: 'password',
    };
    login(user);
  };

  return (
    <form onSubmit={handleLogin}>
      <input type="text" placeholder="Username" />
      <input type="password" placeholder="Password" />
      <button type="submit">Login</button>
    </form>
  );
};

const mapDispatchToProps = {
  login,
};

export default connect(null, mapDispatchToProps)(Login);
