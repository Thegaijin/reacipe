import React from 'react';
import { connect } from 'react-redux';

import { editCategory } from '../_actions/category.actions';
import EditCategoryForm from '../_components/forms/EditCategoryForm';

class EditCategory extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      category: {
        category_name: '',
        description: '',
        submitted: false,
      },
    };
  }
  handleSubmit(values) {
    const { getCategories } = this.props;
    this.props.editCategory(values);
    getCategories();
    window.location.assign('/dashboard');
  }
  render() {
    return (
      <div className="col-md-offset-3">
        <EditCategoryForm onSubmit={this.handleSubmit.bind(this)} />
      </div>
    );
  }
}

const connectedEditCategory = connect(null, { editCategory })(EditCategory);
export { connectedEditCategory as EditCategory };
