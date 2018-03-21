import React from 'react';
import { connect } from 'react-redux';
import Collapsible from 'react-collapsible';
import { confirmAlert } from 'react-confirm-alert';
import 'react-confirm-alert/src/react-confirm-alert.css';
import { Pagination } from 'react-bootstrap';

import Layout from '../_components/Layout';
import { CategoryPage } from '../_components/CategoryPage';
import { viewCategory, currentCategory, deleteCategory } from '../_actions/category.actions';
import { viewRecipes, deleteRecipe, currentRecipe } from '../_actions/recipe.actions';
import { EditCategory } from '../_components/EditCategoryPage';
import { EditRecipe } from '../_components/EditRecipePage';
import { RecipePage } from '../_components/RecipePage';
import { SearchCategoryPage } from '../_components/SearchCategoryPage';
import { SearchRecipePage } from '../_components/SearchRecipePage';

class Dashboard extends React.Component {
  constructor(props) {
    super(props);
    console.log('&&&&&&&&&&&&&&&&&&&&&&&&&&&& dash constructor');
    // this.props.viewCategory();
    this.props.viewRecipes();
    this.state = {
      categories: [],
      recipes: [],
      categoryOpen: false,
      recipeOpen: false,
      currentCategoryPage: 1,
      currentRecipePage: 1,
      categoryId: 0,
    };
  }

  componentDidMount() {
    this.props.viewCategory();
  }

  componentDidUpdate(nextProps) {
    if (this.props !== nextProps) {
      console.log('!!!!!!!!!!!!!!! it updated!');
    }
  }
  reloadCategories = () => {
    this.props.viewCategory();
  };

  reloadRecipes = () => {
    this.props.viewRecipes();
  }
  getCategory = (category) => {
    this.setState({
      categoryOpen: !this.state.categoryOpen,
    });
    this.props.currentCategory(category);
    // this.getCategories();
  };

  getRecipe = (recipe) => {
    this.setState({
      recipeOpen: !this.state.recipeOpen,
    });
    this.props.currentRecipe(recipe);
  };

  deleteACategory = (category) => {
    confirmAlert({
      message: `Are you sure you want to delete category: ${category.category_name}`,
      buttons: [
        {
          label: 'Yes',
          onClick: () => {
            this.props.deleteCategory(category).then(() => {
              this.reloadCategories();
            });
          },
        },
        {
          label: 'No',
          onClick: () => {},
        },
      ],
    });
  };

  viewACategoriesRecipes = (categoryId) => {
    this.props.viewRecipes(categoryId);
    this.setState({ categoryId: categoryId });
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
  selectedCategoryPage = (pageNum) => {
    console.log('this is the category page --->>>>>', pageNum);
    this.props.viewCategory(pageNum);
    this.setState({ currentCategoryPage: pageNum });
  };

  selectedRecipePage = (pageNum) => {
    const categoryId = this.state.categoryId;
    this.props.viewRecipes(categoryId, pageNum);
    this.setState({ currentRecipePage: pageNum });
  };

  // Category Pagination
  categoryPagination = (categoryPages) => {
    const theItems = [];
    if (categoryPages) {
      theItems.push(
        <Pagination.First
          key={0}
          disabled={this.state.currentCategoryPage === 1}
          onClick={this.selectedCategoryPage.bind(this, 1)}
        />,
        <Pagination.Prev
          key={1}
          disabled={this.state.currentCategoryPage === 1}
          onClick={this.selectedCategoryPage.bind(
            this,
            this.state.currentCategoryPage - 1 > 1 ? this.state.currentCategoryPage - 1 : 1,
          )}
        />,
      );

      for (let i = 1; i <= categoryPages; i++) {
        theItems.push(
          <Pagination.Item
            key={i + 1}
            active={i === this.state.currentCategoryPage}
            onClick={this.selectedCategoryPage.bind(this, i)}
          >
            {i}
          </Pagination.Item>,
        );
      }
      theItems.push(
        <Pagination.Next
          key={theItems.length + 1}
          disabled={this.state.currentCategoryPage === categoryPages}
          onClick={this.selectedCategoryPage.bind(
            this,
            this.state.currentCategoryPage + 1 <= categoryPages
              ? this.state.currentCategoryPage + 1
              : categoryPages,
          )}
        />,
        <Pagination.Last
          key={theItems.length + 2}
          disabled={this.state.currentCategoryPage === categoryPages}
          onClick={this.selectedCategoryPage.bind(this, categoryPages)}
        />,
      );
    }
    return theItems;
  };

  // Recipe Pagination
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
    const { categories, recipes, categoryPages, recipePages } = this.props;
    const { categoryOpen, recipeOpen } = this.state;
    return (
      <Layout>
        <div>
          <br />
          <br />
          <h3 className="welcome-h3">Welcome to Yummy Recipes</h3>
        </div>
        <div className="row">
          {/* Categories */}
          <div className="col-sm-4">
            <h4>Categories</h4>
            <CategoryPage getCategories={this.reloadCategories} />
            <br />
            Search Categories
            <SearchCategoryPage />
            <br />
            {categories && categories.length > 0 ? (
              categories.map(category => (
                <div className="block" key={category.category_id}>
                  <Collapsible trigger={category.category_name}>
                    <div className="details">
                      <p>{category.description}</p>
                    </div>
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
                                  onClick={() => this.getCategory(category)}
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
                                  <i className="fa fa-trash-o mr-2" aria-hidden="true" />
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
            <div className="container-fluid">
              <div className="text-centered">
                <Pagination bsSize="medium"> {this.categoryPagination(categoryPages)} </Pagination>
              </div>
            </div>
          </div>

          {/* Recipes */}
          <div className="col-sm-8">
            <div>
              {!!categoryOpen && <EditCategory getCategories={this.reloadCategories} />}

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
                        <div> No Recipes </div>
                      )}
                      <div className="container-fluid">
                        <div className="text-centered">
                          <Pagination bsSize="medium">
                            {this.recipePagination(recipePages)}
                          </Pagination>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div>{!!recipeOpen && <EditRecipe />}</div>
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

const connectedDashboard = connect(mapStateToProps, {
  viewCategory,
  currentCategory,
  deleteCategory,
  currentRecipe,
  viewRecipes,
  deleteRecipe,
})(Dashboard);
export { connectedDashboard as Dashboard };
