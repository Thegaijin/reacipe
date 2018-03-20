import React from 'react';
import { connect } from 'react-redux';

import SearchCategoryForm from '../_components/forms/SearchCategoryForm';
import { viewCategory } from '../_actions/category.actions';

class SearchCategoryPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      submitted: false,
    };
  }

  handleSubmit(values) {
    console.log('This is the id*************', values);
    console.log('This is the id*************', values.category_name);
    const search = values.category_name;
    this.props.viewCategory(search);
  }

  render() {
    return (
      <div>
        <SearchCategoryForm onSubmit={this.handleSubmit.bind(this)} />
      </div>
    );
  }
}

const connectedSearchCategoryPage = connect(null, { viewCategory })(SearchCategoryPage);
export { connectedSearchCategoryPage as SearchCategoryPage };
