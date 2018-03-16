import React from 'react';
import { connect } from 'react-redux';
import Collapsible from 'react-collapsible';

import Layout from '../Layout/Layout';
import { CategoryPage } from '../CategoryPage/CategoryPage';
import { viewCategory, currentCategory, deleteCategory } from '../_actions/category.actions';
import { viewRecipes, deleteRecipe } from '../_actions/recipe.actions';
import { EditCategory } from '../CategoryPage/EditCategoryPage';
import { RecipePage } from '../RecipePage/RecipePage';

class Dashboard extends React.Component {
  constructor(props) {
    super(props);
    this.props.viewCategory();
    this.props.viewRecipes();
    this.state = {
      categories: [],
      recipes: [],
      categoriesOpen: false,
    };
  }
  mapCategories = (category) => {
    this.setState({
      categoriesOpen: !this.state.categoriesOpen,
    });
    this.props.currentCategory(category);
  };

  // `mapRecipes = (recipe) => {};

  deleteACategory = (category) => {
    this.props.deleteCategory(category);
  };

  viewACategoriesRecipes = (categoryId) => {
    this.props.viewRecipes(categoryId);
  };

  deleteARecipe = (recipe) => {
    this.props.deleteRecipe(recipe);
  };

  render() {
    const { categories, recipes } = this.props;
    const { categoriesOpen } = this.state;
    console.log('_-_-_-_-_-_-_-_-_-', this.state.categoriesOpen);
    return (
      <Layout>
        <div>
          <br />
          <br />
          <p>You're logged into Yummy Recipes</p>
          <h3>Welcome</h3>
        </div>
        <div className="row">
          {/* Categories */}
          <div className="col-sm-4">
            Categories
            <br />
            <CategoryPage />
            <br />
            {categories && categories.length > 0 ? (
              categories.map(category => (
                <div className="block" key={category.category_id}>
                  <Collapsible trigger={category.category_name}>
                    <p>{category.description}</p>
                    <div className="container-fluid">
                      <table className="text-centered">
                        <tbody>
                          <tr>
                            <td>
                              <div>
                                <button
                                  type="button"
                                  onClick={this.viewACategoriesRecipes.bind(
                                    this,
                                    category.category_id,
                                  )}
                                  className="btn-lg btn-sm"
                                >
                                  <i className="fa fa-eye" aria-hidden="true" />
                                </button>
                              </div>
                            </td>
                            <td>
                              <div>
                                <button
                                  type="button"
                                  onClick={() => this.mapCategories(category)}
                                  className="btn-lg btn-primary btn-sm"
                                >
                                  <i className="fa fa-pencil-square-o" aria-hidden="true" />
                                </button>
                              </div>
                            </td>
                            <td data-id={category.category_id}>
                              <div>
                                <RecipePage categoryId={category.category_id} />
                              </div>
                            </td>
                            <td data-id={category.category_id}>
                              <div>
                                <button
                                  type="button"
                                  onClick={() => this.deleteACategory(category)}
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
              <div> No Categories </div>
            )}
          </div>
          {/* Recipes */}
          <div className="col-sm-8">
            <div>
              {!!categoriesOpen && <EditCategory />}
              <div>
                recipes
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
                                            className="btn-lg btn-primary btn-sm"
                                          >
                                            <i
                                              className="fa fa-pencil-square-o"
                                              aria-hidden="true"
                                            />
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
                        <div> No recipes </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    );
  }
}

function mapStateToProps(state) {
  console.log('@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@>>>>>', state.viewCategoryReducer.categories);
  console.log('@@@@@@@@@@@@@@@@@@@recipes@@@@@@@@@@@@@@@@@>>>>>', state.viewRecipeReducer.recipes);
  return {
    categories: state.viewCategoryReducer.categories,
    recipes: state.viewRecipeReducer.recipes,
  };
}

const connectedDashboard = connect(mapStateToProps, {
  viewCategory,
  currentCategory,
  deleteCategory,
  viewRecipes,
  deleteRecipe,
})(Dashboard);
export { connectedDashboard as Dashboard };
