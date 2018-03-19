import React from 'react';
import PropTypes from 'prop-types';
import { Field, reduxForm } from 'redux-form';
import { Link } from 'react-router-dom';

import { required, username, password } from '../../_helpers/validators';

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

const LoginForm = (props) => {
  const { handleSubmit, pristine, isSubmitting } = props;

  return (
    <div className="auth">
      <form className="form-signin" onSubmit={handleSubmit}>
        <div>
          <label>Username</label>
          <Field
            name="username"
            id="username"
            type="text"
            component={RenderInput}
            label="Username"
            validate={[required, username]}
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
          />
        </div>
        <button
          className="btn btn-sm btn-primary"
          disabled={pristine || isSubmitting}
          type="submit"
        >
          {isSubmitting ? <i className="fa fa-spin fa-spinner" /> : null}
          Login
        </button>
      </form>
      <p className="auth_option">
        Don't have an account?
        <Link to="/register" className="btn-lg">
          Register
        </Link>
      </p>
    </div>
  );
};

LoginForm.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  // onSubmit: PropTypes.func.isRequired,
  // isSubmitting: PropTypes.func.isRequired
};

export default reduxForm({
  form: 'loginform',
})(LoginForm);
