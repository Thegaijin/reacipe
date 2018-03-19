// @flow
import React from 'react';
import PropTypes from 'prop-types';
import { Field, reduxForm } from 'redux-form';

import { required, recipename } from '../_helpers/validators';

const createRenderer = render => ({ input, meta, label }) => (
  <div
    className={[meta.error && meta.touched ? 'error' : '', meta.active ? 'active' : ''].join(' ')}
  >
    {render(input, label)}
    {meta.error && meta.touched && <span>{meta.error}</span>}
  </div>
);

const RenderInput = createRenderer((input, type, label) => (
  <input {...input} type={type} placeholder={label} className="pa2 ba b--black-40 w-100" />
));

const RecipeForm = (props) => {
  const { handleSubmit, pristine, label, isSubmitting } = props;

  return (
    <div className="auth">
      <form className="form-recipe" onSubmit={handleSubmit}>
        <div>
          <label>Recipe Name</label>
          <div>
            <Field
              name="recipe_name"
              id="recipename"
              type="text"
              component={RenderInput}
              label="recipe name"
              validate={[required, recipename]}
              placeholder="First Name"
            />
          </div>
        </div>
        <div>
          <label>Ingredients</label>
          <div>
            <Field
              name="ingredients"
              id="ingredients"
              type="text"
              component={RenderInput}
              label="ingredients"
              validate={[required]}
            />
          </div>
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

RecipeForm.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  // onSubmit: PropTypes.func.isRequired,
  // isSubmitting: PropTypes.func.isRequired
};

export default reduxForm({
  form: 'Recipeform',
})(RecipeForm);
