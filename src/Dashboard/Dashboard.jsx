import React from 'react';
import { connect } from 'react-redux';
import Collapsible from 'react-collapsible';

import Layout from '../Layout/Layout';
import { CategoryPage } from '../CategoryPage/CategoryPage';
import { viewCategory, currentCategory } from '../_actions/category.actions';
import { EditCategory } from '../CategoryPage/EditCategoryPage';

class Dashboard extends React.Component {
  constructor(props) {
    super(props);
    this.props.viewCategory();
    this.state = {
      categories: [],
      categoriesOpen: false,
    };
  }
  mapCategories = (category) => {
    this.setState({
      categoriesOpen: !this.state.categoriesOpen,
    });
    this.props.currentCategory(category);
  };

  render() {
    const { categories } = this.props;
    const { categoriesOpen } = this.state;
    console.log('_-_-_-_-_-_-_-_-_-', this.state.categoriesOpen);
    return (
      <Layout>
        <div>
          <p>You're logged into Yummy Recipes</p>
          <h3>Let's get cooking</h3>
        </div>
        <div className="row">
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
                    <table>
                      <tbody>
                        <tr>
                          <td>
                            <div>
                              <button type="button" className="btn-lg btn-sm">
                                view
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
                                Edit
                              </button>
                            </div>
                          </td>
                          <td>
                            <div>
                              <button type="button" className="btn-lg btn-danger btn-sm">
                                delete
                              </button>
                            </div>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </Collapsible>
                </div>
              ))
            ) : (
              <div> No Categories </div>
            )}
          </div>
          <div className="col-sm-8">{!!categoriesOpen && <EditCategory />}</div>
        </div>
      </Layout>
    );
  }
}

function mapStateToProps(state) {
  return {
    categories: state.viewCategoryReducer.categories,
  };
}

const connectedDashboard = connect(mapStateToProps, { viewCategory, currentCategory })(Dashboard);
export { connectedDashboard as Dashboard };
