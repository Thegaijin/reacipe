import React from 'react';
import { connect } from 'react-redux';

import { login } from '../_actions/user.actions';
import LoginForm from '../_components/forms/LoginForm';

class LoginPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      username: '',
      password: '',
      submitted: false,
    };
  }

  handleSubmit(values) {
    this.props.login(values);
  }
  render() {
    return (
      <div className="row">
        <div className="col-md-offset-4 col-md-4 whiteback">
          <LoginForm onSubmit={this.handleSubmit.bind(this)} />
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  const { loggingIn, loggedIn } = state.authentication;
  return {
    loggingIn,
    loggedIn,
  };
}

const connectedLoginPage = connect(mapStateToProps, { login })(LoginPage);
export { connectedLoginPage as LoginPage };
