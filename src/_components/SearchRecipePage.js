import React from 'react';
import { connect } from 'react-redux';

import SearchRecipeForm from '../_components/forms/SearchRecipeForm';
import { viewRecipes } from '../_actions/recipe.actions';

class SearchRecipePage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      submitted: false,
    };
  }

  handleSubmit(values) {
    console.log('<<<<<<<<<The categoryId>>>>>>>>>', this.state);
    console.log('Search recipes, This is the id*************', this.props.categoryId);
    console.log('These are the values*************', values);
    console.log('This is the value*************', values.recipe_name);
    const search = values.recipe_name;
    this.props.viewRecipes(this.props.categoryId, search);
  }

  render() {
    return (
      <div>
        <SearchRecipeForm onSubmit={this.handleSubmit.bind(this)} />
      </div>
    );
  }
}

const connectedSearchRecipePage = connect(null, { viewRecipes })(SearchRecipePage);
export { connectedSearchRecipePage as SearchRecipePage };
