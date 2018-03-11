import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import PropTypes from "prop-types";

// import { userActions } from "../_actions/user.actions";
import { register } from "../_actions/user.actions";
import { registerFields } from "../_constants/register.constants";
import RegisterForm from "../_components/RegistrationForm";
import { userService } from "../_services/user.services";

class RegisterPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user: {
        email: "",
        username: "",
        password: ""
      },
      submitted: false
    };
  }

  handleSubmit(values) {
    console.log(">>>>>>>>>>", this.props.actions, values);
    // this.props.dispatch(this.props.userActions.register(values));
    this.props.register(values).then(() => {
      this.props.history.push("/login");
      // dispatch(alertActions.success("Registration successful"));
    });
    console.log("Try me try me");
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

RegisterPage.PropTypes = {
  dispatch: PropTypes.isRequired,
  user: PropTypes.isRequired
};

// function mapDispatchToProps(dispatch) {
//   return {
//     actions: bindActionCreators(register, dispatch)
//   };
// }

function mapStateToProps(state) {
  const { registering } = state.registration;
  return {
    registering
  };
}
// const register = userService.register;
const connectedRegisterPage = connect(mapStateToProps, { register })(
  RegisterPage
);
export { connectedRegisterPage as RegisterPage };
