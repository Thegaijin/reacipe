import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { required, categoryname } from '../_helpers/validators';

const createRenderer = render => ({ input, meta, label }) => (
  <div
    className={[meta.error && meta.touched ? 'error' : '', meta.active ? 'active' : ''].join(' ')}
  >
    {render(input, label)}
    {meta.error && meta.touched && <span>{meta.error}</span>}
  </div>
);

const RenderInput = createRenderer((input, type, label) => (
  <input {...input} placeholder={label} type={type} className="pa2 ba b--black-40 w-100" />
));

class EditCategoryForm extends React.Component {
  componentDidMount() {
    this.handleInitialize();
  }

  handleInitialize() {
    console.log('xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx', this.props);
    const initData = {
      category_id: this.props.currentCategory.category_id,
      category_name: this.props.currentCategory.category_name,
      description: this.props.currentCategory.description,
    };

    this.props.initialize(initData);
  }
  render() {
    const { handleSubmit, pristine, isSubmitting } = this.props;
    return (
      <div className="auth">
        <form className="form-signin" onSubmit={handleSubmit}>
          <Field
            name="category_name"
            id="category_name"
            type="text"
            component={RenderInput}
            label="category name"
            validate={[required, categoryname]}
          />
          <Field
            name="description"
            id="description"
            type="text"
            component={RenderInput}
            label="description"
            validate={[required]}
          />
          <button
            className="btn btn-lg btn-primary btn-block"
            disabled={pristine || isSubmitting}
            type="submit"
          >
            {isSubmitting ? <i className="fa fa-spin fa-spinner" /> : null}
            Submit
          </button>
        </form>
      </div>
    );
  }
}

EditCategoryForm.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
};

function mapStateToProps(state) {
  return {
    currentCategory: state.editCategoryReducer.currentCategory,
  };
}

export default connect(mapStateToProps)(
  reduxForm({
    form: 'categoryform',
  })(EditCategoryForm),
);
