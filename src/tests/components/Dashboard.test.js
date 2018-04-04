import React from 'react';
import Enzyme, { mount, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
// import ReactDOM from 'react-dom';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';

import { Dashboard } from '../../_components/Dashboard';

Enzyme.configure({ adapter: new Adapter() });

describe('<Dashboard />', () => {
  const store = configureMockStore([thunk])({
    authentication: {},
    categoryReducer: {
      categories: [],
    },
    recipeReducer: {},
  });
  const props = {
    categories: [],
    recipes: [],
    categoryPages: 1,
    recipePages: 1,
    currentCategoryPage: 1,
    currentRecipePage: 1,
    categoryId: 1,
  };
  it('should render itself without crashing', () => {
    mount(
      <Provider store={store}>
        <Dashboard {...props} />
      </Provider>,
    );
  });
});
