import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { required, recipename } from '../../_helpers/validators';

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

class EditRecipeForm extends React.Component {
  componentDidMount() {
    this.handleInitialize();
  }

  handleInitialize() {
    console.log('xxxxxxxxxxxxxxxxxxfly awayxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx', this.props);
    const initData = {
      category: this.props.currentRecipe.category,
      recipe_id: this.props.currentRecipe.recipe_id,
      recipe_name: this.props.currentRecipe.recipe_name,
      ingredients: this.props.currentRecipe.ingredients,
    };

    this.props.initialize(initData);
  }
  render() {
    const { handleSubmit, pristine, isSubmitting } = this.props;
    return (
      <div className="auth">
        <form className="form-signin" onSubmit={handleSubmit}>
          <div>
            <label>Recipe Name</label>
            <Field
              name="recipe_name"
              id="recipe_id"
              type="text"
              component={RenderInput}
              label="recipe name"
              validate={[required, recipename]}
            />
          </div>
          <div>
            <label>Recipe Description</label>
            <Field
              name="ingredients"
              id="ingredients"
              type="text"
              component={RenderInput}
              label="ingredients"
              validate={[required]}
            />
          </div>
          {/* <Field name="category" id="category" type="hidden" component={RenderInput} /> */}
          <button
            className="btn btn-lg btn-primary btn-sm"
            disabled={pristine || isSubmitting}
            type="submit"
          >
            {isSubmitting ? <i className="fa fa-spin fa-spinner" /> : null}
            Submit
          </button>
        </form>
      </div>
    );
  }
}

EditRecipeForm.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
};

function mapStateToProps(state) {
  return {
    currentRecipe: state.editRecipeReducer.currentRecipe,
  };
}

export default connect(mapStateToProps)(
  reduxForm({
    form: 'recipeform',
  })(EditRecipeForm),
);
