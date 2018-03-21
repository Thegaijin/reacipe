import React from 'react';
import { connect } from 'react-redux';
import Collapsible from 'react-collapsible';
import { confirmAlert } from 'react-confirm-alert';
import 'react-confirm-alert/src/react-confirm-alert.css';
import { Pagination } from 'react-bootstrap';

import Layout from '../_components/Layout';
// import { CategoryPage } from '../_components/CategoryPage';
import { viewCategory, currentCategory, deleteCategory } from '../_actions/category.actions';
import { viewRecipes, deleteRecipe, currentRecipe } from '../_actions/recipe.actions';
import { EditCategory } from '../_components/EditCategoryPage';
import { EditRecipe } from '../_components/EditRecipePage';
// import { RecipePage } from '../_components/RecipePage';
// import { SearchCategoryPage } from '../_components/SearchCategoryPage';
// import { SearchRecipePage } from '../_components/SearchRecipePage';
import { LoadCategories } from '../_components/LoadCategories';
import { LoadRecipes } from '../_components/LoadRecipes';

class Dashboard extends React.Component {
  constructor(props) {
    super(props);
    console.log('&&&&&&&&&&&&&&&&&&&&&&&&&&&& dash constructor');
    // this.props.viewCategory();
    this.props.viewRecipes();
    this.state = {
      categoryOpen: false,
      recipeOpen: false,
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
  };
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

  render() {
    // const { categories, recipes, categoryPages, recipePages } = this.props;
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
            <LoadCategories />
          </div>

          {/* Recipes */}
          <div className="col-sm-8">
            <div>
              {!!categoryOpen && <EditCategory getCategories={this.reloadCategories} />}
              <div>
                <LoadRecipes />
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
