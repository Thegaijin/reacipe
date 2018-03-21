import React from 'react';
import { connect } from 'react-redux';
import { Modal, Button } from 'react-bootstrap';

import { editCategory } from '../_actions/category.actions';
import EditCategoryForm from '../_components/forms/EditCategoryForm';

class EditCategory extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.handleShow = this.handleShow.bind(this);
    this.handleHide = this.handleHide.bind(this);
    this.state = {
      category: {
        category_name: '',
        description: '',
        submitted: false,
        show: false,
      },
    };
  }

  handleShow() {
    this.setState({ show: true });
  }

  handleHide() {
    this.setState({ show: false });
  }

  handleSubmit(values) {
    const { getCategories } = this.props;
    this.props.editCategory(values);
    getCategories();
    window.location.assign('/dashboard');
  }
  render() {
    console.log('What the actual fuck------->>>>>');
    return (
      <div>
        <Modal
          {...this.props}
          show={this.state.show}
          onHide={this.handleHide}
          dialogClassName="custom-modal"
        >
          <Modal.Header closeButton>
            <Modal.Title id="contained-modal-title-lg">Modal heading</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <h4>Wrapped Text</h4>
            <div className="col-md-offset-3">
              <EditCategoryForm onSubmit={this.handleSubmit.bind(this)} />
            </div>
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={this.handleHide}>Close</Button>
          </Modal.Footer>
        </Modal>
      </div>
      /* <div className="col-md-offset-3">
        <EditCategoryForm onSubmit={this.handleSubmit.bind(this)} />
      </div> */
    );
  }
}

const connectedEditCategory = connect(null, { editCategory })(EditCategory);
export { connectedEditCategory as EditCategory };
