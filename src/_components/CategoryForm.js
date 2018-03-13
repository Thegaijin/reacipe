import React from 'react';
import PropTypes from 'prop-types';
import { Field, reduxForm } from 'redux-form';

import { required, categoryname } from '../_helpers/validators';

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

const CategoryForm = (props) => {
  const { handleSubmit, pristine, isSubmitting } = props;

  return (
    <div className="auth">
      <form className="form-signin" onSubmit={handleSubmit}>
        <Field
          name="category_name"
          id="categoryname"
          type="text"
          component={RenderInput}
          label="category name"
          validate={[required, categoryname]}
        />
        <Field
          name="description"
          id="description"
          type="text"
          component={RenderInput}
          label="description"
          validate={[required]}
        />
        <button
          className="btn btn-lg btn-primary btn-block"
          disabled={pristine || isSubmitting}
          type="submit"
        >
          {isSubmitting ? <i className="fa fa-spin fa-spinner" /> : null}
          Submit
        </button>
      </form>
    </div>
  );
};

CategoryForm.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  // onSubmit: PropTypes.func.isRequired,
  // isSubmitting: PropTypes.func.isRequired
};

export default reduxForm({
  form: 'categoryform',
})(CategoryForm);
