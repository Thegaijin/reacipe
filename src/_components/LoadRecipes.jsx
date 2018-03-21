import React from 'react';
import { connect } from 'react-redux';
import Collapsible from 'react-collapsible';
import { confirmAlert } from 'react-confirm-alert';
import 'react-confirm-alert/src/react-confirm-alert.css';
import { Pagination } from 'react-bootstrap';

import { currentCategory } from '../_actions/category.actions';
import { viewRecipes, deleteRecipe, currentRecipe } from '../_actions/recipe.actions';
import { SearchRecipePage } from '../_components/SearchRecipePage';
import { EditRecipe } from '../_components/EditRecipePage';

class LoadRecipes extends React.Component {
  constructor(props) {
    super(props);
    this.props.viewRecipes();
    this.state = {
      recipes: [],
      recipeOpen: false,
      currentCategoryPage: 1,
      currentRecipePage: 1,
      categoryId: 0,
    };
  }

  getRecipe = (recipe) => {
    this.setState({
      recipeOpen: !this.state.recipeOpen,
    });
    this.props.currentRecipe(recipe);
  };

  selectedRecipePage = (pageNum) => {
    const categoryId = this.state.categoryId;
    this.props.viewRecipes(categoryId, pageNum);
    this.setState({ currentRecipePage: pageNum });
  };
  deleteARecipe = (recipe) => {
    confirmAlert({
      message: `Are you sure you want to delete recipe: ${recipe.recipe_name}`,
      buttons: [
        {
          label: 'Yes',
          onClick: () => {
            this.props.deleteRecipe(recipe);
          },
        },
        {
          label: 'No',
          onClick: () => {},
        },
      ],
    });
  };
  recipePagination = (recipePages) => {
    const theItems = [];
    if (recipePages) {
      theItems.push(
        <Pagination.First
          key={0}
          disabled={this.state.currentRecipePage === 1}
          onClick={this.selectedRecipePage.bind(this, 1)}
        />,
        <Pagination.Prev
          key={1}
          disabled={this.state.currentRecipePage === 1}
          onClick={this.selectedRecipePage.bind(
            this,
            this.state.currentRecipePage - 1 > 1 ? this.state.currentRecipePage - 1 : 1,
          )}
        />,
      );
      for (let i = 1; i <= recipePages; i++) {
        theItems.push(
          <Pagination.Item
            key={i + 1}
            active={i === this.state.currentRecipePage}
            onClick={this.selectedRecipePage.bind(this, i)}
          >
            {i}
          </Pagination.Item>,
        );
      }
      theItems.push(
        <Pagination.Next
          key={theItems.length + 1}
          disabled={this.state.currentRecipePage === recipePages}
          onClick={this.selectedRecipePage.bind(
            this,
            this.state.currentRecipePage + 1 <= recipePages
              ? this.state.currentRecipePage + 1
              : recipePages,
          )}
        />,
        <Pagination.Last
          key={theItems.length + 2}
          disabled={this.state.currentRecipePage === recipePages}
          onClick={this.selectedRecipePage.bind(this, recipePages)}
        />,
      );
    }
    return theItems;
  };
  render() {
    const { recipes, recipePages } = this.props;
    const { recipeOpen } = this.state;
    return (
      <div>
        <h4>Recipes</h4>
        <br />
        <div className="recipe-search">
          Search Recipes
          <SearchRecipePage categoryId={this.state.categoryId} />
        </div>
        <br />
        <div className="container">
          <div className="row">
            <div className="col-sm">
              {recipes && recipes.length > 0 ? (
                recipes.map(recipe => (
                  <div className="block" key={recipe.recipe_id}>
                    <Collapsible trigger={recipe.recipe_name}>
                      <p>{recipe.ingredients}</p>
                      <div className="container-fluid">
                        <table className="text-centered">
                          <tbody>
                            <tr>
                              <td>
                                <div>
                                  <button
                                    type="button"
                                    onClick={() => this.getRecipe(recipe)}
                                    className="btn-lg btn-primary btn-sm"
                                  >
                                    <i className="fa fa-pencil-square-o" aria-hidden="true" />
                                  </button>
                                </div>
                              </td>
                              <td data-id={recipe.recipe_id}>
                                <div>
                                  <button
                                    type="button"
                                    onClick={() => this.deleteARecipe(recipe)}
                                    className="btn-lg btn-danger btn-sm"
                                  >
                                    <i className="fa fa-trash-o" aria-hidden="true" />
                                  </button>
                                </div>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </Collapsible>
                  </div>
                ))
              ) : (
                <div> No Recipes </div>
              )}
              <div className="container-fluid">
                <div className="text-centered">
                  <Pagination bsSize="medium">{this.recipePagination(recipePages)}</Pagination>
                </div>
              </div>
            </div>
          </div>
          <div>{!!recipeOpen && <EditRecipe />}</div>
        </div>
      </div>
    );
  }
}
function mapStateToProps(state) {
  console.log(state, 'statatttttttt');
  const { categories, categoryPages, categoryPage } = state.categoryReducer;
  const { recipes, recipePages, recipePage, categoryId } = state.recipeReducer;
  return {
    categories: categories,
    recipes: recipes,
    categoryPages: categoryPages,
    recipePages: recipePages,
    currentCategoryPage: categoryPage,
    currentRecipePage: recipePage,
    categoryId: categoryId,
  };
}

const connectedLoadRecipes = connect(mapStateToProps, {
  currentCategory,
  currentRecipe,
  viewRecipes,
  deleteRecipe,
})(LoadRecipes);
export { connectedLoadRecipes as LoadRecipes };
