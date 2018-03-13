import React from 'react';
import { connect } from 'react-redux';

import { register } from '../_actions/user.actions';
import RegisterForm from '../_components/RegistrationForm';

class RegisterPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user: {
        email: '',
        username: '',
        password: '',
      },
      submitted: false,
    };
  }

  handleSubmit(values) {
    this.props.register(values);
  }

  render() {
    return (
      <div className="row">
        <div className="col-md-offset-4 col-md-4 whiteback">
          <RegisterForm
            onSubmit={this.handleSubmit.bind(this)}
            // isSubmitting={this.props.user.request.sendRequest}
          />
        </div>
      </div>
    );
  }
}

const connectedRegisterPage = connect(null, { register })(RegisterPage);
export { connectedRegisterPage as RegisterPage };
