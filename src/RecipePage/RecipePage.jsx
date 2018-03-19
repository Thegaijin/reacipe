import React from 'react';
import { connect } from 'react-redux';
import Modal from 'react-modal';

import { createRecipe } from '../_actions/recipe.actions';
import RecipeForm from '../_components/RecipeForm';

class RecipePage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isActive: false,
      recipename: '',
      ingredients: '',
      submitted: false,
    };
  }
  componentWillMount = () => {
    Modal.setAppElement('body');
  };

  toggleModal = () => {
    this.setState({ isActive: !this.state.isActive });
  };

  handleSubmit(values) {
    console.log('This is the id*************', this.props.categoryId);
    console.log('>>>>>>>>>>', values);
    console.log(
      '/*/*/*/*/*/*/*/*/*/*/*/*/*/*/*/*',
      values.recipename,
      values.ingredrients,
      this.props.categoryId,
    );
    this.props.createRecipe(this.props.categoryId, values).then(() => {});
  }
  render() {
    return (
      <div>
        <button className="btn btn-primary btn-sm" onClick={this.toggleModal}>
          <i className="fa fa-plus-square-o" aria-hidden="true" />
          recipe
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
          Add recipe
          <RecipeForm onSubmit={this.handleSubmit.bind(this)} />
          <button className="btn btn-danger" onClick={this.toggleModal}>
            Close
          </button>
        </Modal>
      </div>
    );
  }
}

const connectedRecipePage = connect(null, { createRecipe })(RecipePage);
export { connectedRecipePage as RecipePage };
