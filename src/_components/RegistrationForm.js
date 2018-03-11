import React from "react";
import PropTypes from "prop-types";
import { Field, reduxForm } from "redux-form";
import { Link } from "react-router-dom";

const required = value => (value ? undefined : "Required");
const username = value =>
  value && !/^[a-zA-Z_]+([a-zA-Z0-9]{1,10})$/i.test(value)
    ? `${value} is not a valid username. It should comprise of alphanumeric values & an underscore.`
    : undefined;
const email = value =>
  value && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)
    ? `${value} does not meet standard email conventions`
    : undefined;
// ^[a-zA-Z0-9_.]+@[a-zA-Z0-9]+\.[a-zA-Z0-9.]+$
const password = value =>
  value && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)
    ? "Password can only comprise of alphanumeric values & an underscore and not more than 25 characters"
    : undefined;

const createRenderer = render => ({ input, meta, label }) => (
  <div
    className={[
      meta.error && meta.touched ? "error" : "",
      meta.active ? "active" : ""
    ].join(" ")}
  >
    {render(input, label)}
    {meta.error && meta.touched && <span>{meta.error}</span>}
  </div>
);

const RenderInput = createRenderer((input, label) => (
  <input {...input} placeholder={label} className="pa2 ba b--black-40 w-100" />
));
const RegisterForm = props => {
  const { handleSubmit, pristine, isSubmitting } = props;

  {
    /* <div className="flex flex-column justify-center items-center"> */
  }
  return (
    <div className="auth">
      <form className="form-signin" onSubmit={handleSubmit}>
        <Field
          name="email"
          id="email"
          type="email"
          component={RenderInput}
          label="Email"
          validate={[required, email]}
        />
        <Field
          name="username"
          id="username"
          type="text"
          component={RenderInput}
          label="Username"
          validate={[required, username]}
        />
        <Field
          name="password"
          id="password"
          type="password"
          component={RenderInput}
          label="Password"
        />
        <button
          className="btn btn-lg btn-primary btn-block"
          disabled={pristine || isSubmitting}
          type="submit"
        >
          {isSubmitting ? <i className="fa fa-spin fa-spinner" /> : null}
          Register
        </button>
      </form>
      <p className="auth_option">
        Already have an account?
        <Link to="/login" className="btn-lg">
          Login
        </Link>
      </p>
    </div>
  );
};

RegisterForm.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
  pristine: PropTypes.func.isRequired
  // isSubmitting: PropTypes.func.isRequired
};

export default reduxForm({
  form: "registrationform"
})(RegisterForm);
