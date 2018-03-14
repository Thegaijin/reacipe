import React from 'react';
import { connect } from 'react-redux';
import Collapsible from 'react-collapsible';

import Layout from '../Layout/Layout';
import { CategoryPage } from '../CategoryPage/CategoryPage';
import { viewCategory } from '../_actions/category.actions';

class Dashboard extends React.Component {
  constructor(props) {
    super(props);
    this.props.viewCategory();
    this.state = {};
  }

  render() {
    const { categories } = this.props;
    console.log('_-_-_-_-_-_-_-_-_-', categories);
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
                            <a href="">
                              <i className="fa fa-folder-open fa-lg iconpos" aria-hidden="true" />
                            </a>
                          </td>
                          <td>
                            <a href="">
                              <i
                                className="fa fa-pencil-square-o fa-lg iconpos"
                                aria-hidden="true"
                              />
                            </a>
                          </td>
                          <td>
                            <a href="">
                              <i className="fa fa-trash fa-lg iconpos" aria-hidden="true" />
                            </a>
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
          <div className="col-sm-8">recipes</div>
        </div>
      </Layout>
    );
  }
}

function mapStateToProps(state) {
  return {
    categories: state.viewcategoryreducer.categories,
  };
}

const connectedDashboard = connect(mapStateToProps, { viewCategory })(Dashboard);
export { connectedDashboard as Dashboard };
