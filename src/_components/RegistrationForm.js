import React from 'react';
import PropTypes from 'prop-types';
import { Field, reduxForm } from 'redux-form';
import { Link } from 'react-router-dom';

import { required, email, username, password } from '../_helpers/validators';

const createRenderer = render => ({ input, meta, label }) => (
  <div
    className={[meta.error && meta.touched ? 'error' : '', meta.active ? 'active' : ''].join(' ')}
  >
    {render(input, label)}
    {meta.error && meta.touched && <span>{meta.error}</span>}
  </div>
);

const RenderInput = createRenderer((input, type, label) => (
  <input {...input} placeholder={label} type={type} className="pa2 ba b--black-40 w-100" />
));
const RegisterForm = (props) => {
  const { handleSubmit, pristine, isSubmitting } = props;

  return (
    <div className="auth">
      <form className="form-signin" onSubmit={handleSubmit}>
        <div>
          <label>Email</label>
          <Field
            name="email"
            id="email"
            type="email"
            component={RenderInput}
            label="Email"
            validate={[required, email]}
            placeholder="Email"
          />
        </div>
        <div>
          <label>Username</label>
          <Field
            name="username"
            id="username"
            type="text"
            component={RenderInput}
            label="Username"
            validate={[required, username]}
            placeholder="Username"
          />
        </div>
        <div>
          <label>Password</label>
          <Field
            name="password"
            id="password"
            type="password"
            component={RenderInput}
            label="Password"
            validate={[required, password]}
            placeholder="Password"
          />
        </div>
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
  pristine: PropTypes.func.isRequired,
  // isSubmitting: PropTypes.func.isRequired
};

export default reduxForm({
  form: 'registrationform',
})(RegisterForm);
