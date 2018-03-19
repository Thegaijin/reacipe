import React from 'react';
import { connect } from 'react-redux';

import SearchRecipeForm from '../_components/SearchRecipeForm';
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
    console.log('This is the id*************', values);
    console.log('This is the id*************', values.recipe_name);
    const search = values.recipe_name;
    this.props.viewRecipes(search);
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
