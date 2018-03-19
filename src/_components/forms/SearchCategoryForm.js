// @flow
import React from 'react';
import PropTypes from 'prop-types';
import { Field, reduxForm } from 'redux-form';

const createRenderer = render => ({ input, meta, label }) => (
  <div
    className={[meta.error && meta.touched ? 'error' : '', meta.active ? 'active' : ''].join(' ')}
  >
    {render(input, label)}
    {meta.error && meta.touched && <span>{meta.error}</span>}
  </div>
);

const RenderInput = createRenderer((input, type, label) => (
  <input {...input} type={type} placeholder={label} className="pa2 ba b--black-40 w-60" />
));

const SearchCategoryForm = (props) => {
  const { handleSubmit, pristine, isSubmitting } = props;

  return (
    <div className="auth">
      <form className="form-search" onSubmit={handleSubmit}>
        <div>
          <Field
            name="category_name"
            id="categoryname"
            type="text"
            component={RenderInput}
            label="category name"
            placeholder="Category Name"
          />
        </div>
        <button
          className="btn btn-sm btn-primary"
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

SearchCategoryForm.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  // onSubmit: PropTypes.func.isRequired,
  // isSubmitting: PropTypes.func.isRequired
};

export default reduxForm({
  form: 'SearchCategoryForm',
})(SearchCategoryForm);
