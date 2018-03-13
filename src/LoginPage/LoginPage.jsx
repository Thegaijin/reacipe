import React from 'react';
import { connect } from 'react-redux';

import { login } from '../_actions/user.actions';
import LoginForm from '../_components/LoginForm';

class LoginPage extends React.Component {
  constructor(props) {
    super(props);

    // reset login status
    // this.props.dispatch(userActions.logout());

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
  const { loggingIn } = state.authentication;
  return {
    loggingIn,
  };
}

const connectedLoginPage = connect(mapStateToProps, { login })(LoginPage);
export { connectedLoginPage as LoginPage };
