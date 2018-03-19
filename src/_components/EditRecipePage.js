import React from 'react';
import { connect } from 'react-redux';

import { editRecipe } from '../_actions/recipe.actions';
import EditRecipeForm from '../_components/forms/EditRecipeForm';

class EditRecipe extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      recipe: {
        recipe_name: '',
        ingredients: '',
        submitted: false,
      },
    };
  }
  handleSubmit(values) {
    console.log('>>>>>>>>>>', values);
    console.log(
      '/*/*/*/*/*/*/*edit edit/*/*/*/*/*/*/*/*/*',
      values.recipe_name,
      values.ingredients,
      this.props,
    );
    this.props.editRecipe(values);
  }
  render() {
    return (
      <div className="col-md-offset-3">
        <EditRecipeForm onSubmit={this.handleSubmit.bind(this)} />
      </div>
    );
  }
}

const connectedEditRecipe = connect(null, { editRecipe })(EditRecipe);
export { connectedEditRecipe as EditRecipe };
