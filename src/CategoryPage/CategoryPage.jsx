import React from 'react';
import { connect } from 'react-redux';
import Modal from 'react-modal';

import { createcategory } from '../_actions/category.actions';
import CategoryForm from '../_components/CategoryForm';

class CategoryPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isActive: false,
      category: {
        category_name: '',
        description: '',
        submitted: false,
      },
    };
  }

  componentWillMount = () => {
    Modal.setAppElement('body');
  };

  toggleModal = () => {
    this.setState({ isActive: !this.state.isActive });
  };

  handleSubmit(values) {
    console.log('>>>>>>>>>>', values);
    console.log('/*/*/*/*/*/*/*/*/*/*/*/*/*/*/*/*', values.category_name, values.description);
    this.props.createcategory(values);
  }
  render() {
    return (
      <div className="col-md-offset-3">
        <button className="btn btn-primary" onClick={this.toggleModal}>
          Add Category
        </button>
        <Modal
          isOpen={this.state.isActive}
          onRequestClose={this.toggleModal}
          style={{
            overlay: {
              position: 'fixed',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              backgroundColor: 'rgba(0, 0, 0, 0.75)',
            },
            content: {
              position: 'absolute',
              top: '40%',
              left: '30%',
              right: '80%',
              bottom: '25%',
              border: '1px solid #ccc',
              background: 'rgba(255, 255, 255, 0.6)',
              overflow: 'auto',
              WebkitOverflowScrolling: 'touch',
              borderRadius: '8px',
              outline: 'none',
              padding: '2rem',
              marginRight: '-50%',
              transform: 'translate(-50%, -50%)',
              minHeight: '10rem',
              maxWidth: '60rem',
              minWidth: '20rem',
              width: '40%',
            },
          }}
          shouldCloseOnEsc
        >
          Add Category
          <CategoryForm onSubmit={this.handleSubmit.bind(this)} />
          <button className="btn btn-danger" onClick={this.toggleModal}>
            Close
          </button>
        </Modal>
      </div>
    );
  }
}

const connectedCategoryPage = connect(null, { createcategory })(CategoryPage);
export { connectedCategoryPage as CategoryPage };
