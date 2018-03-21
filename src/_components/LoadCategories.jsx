import React from 'react';
import { Pagination } from 'react-bootstrap';
import { connect } from 'react-redux';
import Collapsible from 'react-collapsible';
import { confirmAlert } from 'react-confirm-alert';

import { CategoryPage } from '../_components/CategoryPage';
import { viewCategory, currentCategory, deleteCategory } from '../_actions/category.actions';
import { SearchCategoryPage } from '../_components/SearchCategoryPage';
import { viewRecipes } from '../_actions/recipe.actions';
import { EditCategory } from '../_components/EditCategoryModal';
import { RecipePage } from '../_components/RecipePage';

class LoadCategories extends React.Component {
  constructor(props) {
    super(props);
    // this.props.viewCategory();
    this.state = {
      categories: [],
      currentCategoryPage: 1,
      categoryId: 0,
      categoryOpen: false,
    };
  }

  selectedCategoryPage = (pageNum) => {
    console.log('this is the category page --->>>>>', pageNum);
    this.props.viewCategory(pageNum);
    this.setState({ currentCategoryPage: pageNum });
  };

  reloadCategories = () => {
    this.props.viewCategory();
  };

  viewACategoriesRecipes = (categoryId) => {
    console.log('%%%%%%%%$$$$$$$$$$$$++++++>>>>>>>', categoryId);
    this.props.viewRecipes(categoryId);
    this.setState({ categoryId: categoryId });
    console.log('%%%%%%%%$$$$$$state category$$$$$$++++++>>>>>>>', this.state.categoryId);
  };

  getCategory = (category) => {
    this.setState({
      categoryOpen: !this.state.categoryOpen,
    });
    this.props.currentCategory(category);
    // this.getCategories();
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

  render() {
    const { categories, categoryPages } = this.props;
    const { categoryOpen } = this.state;

    return (
      <div>
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
                              onClick={this.viewACategoriesRecipes.bind(this, category.category_id)}
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
        {!!categoryOpen && <EditCategory getCategories={this.reloadCategories} />}
      </div>
    );
  }
}
function mapStateToProps(state) {
  console.log(state, 'statatttttttt');
  const { categories, categoryPages, categoryPage } = state.categoryReducer;
  return {
    categories: categories,
    categoryPages: categoryPages,
    currentCategoryPage: categoryPage,
  };
}

const connectedLoadCategories = connect(mapStateToProps, {
  viewCategory,
  viewRecipes,
  currentCategory,
  deleteCategory,
})(LoadCategories);
export { connectedLoadCategories as LoadCategories };
