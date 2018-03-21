import React from 'react';
import { Pagination } from 'react-bootstrap';

const categoryPagination = (pages) => {
  const theItems = [];
  if (pages) {
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
          this.state.currentCategoryPage - 1 > 1
            ? this.state.currentCategoryPage - 1
            : 1,
        )}
      />,
    );

    for (let i = 1; i <= pages; i++) {
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
        disabled={this.state.currentCategoryPage === pages}
        onClick={this.selectedCategoryPage.bind(
          this,
          this.state.currentCategoryPage + 1 <= pages
            ? this.state.currentCategoryPage + 1
            : pages,
        )}
      />,
      <Pagination.Last
        key={theItems.length + 2}
        disabled={this.state.currentCategoryPage === pages}
        onClick={this.selectedCategoryPage.bind(this, pages)}
      />,
    );
  }
  return theItems;
};

export default categoryPagination;
