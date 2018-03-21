// import Enzyme, { render, mount } from 'enzyme';
// import Adapter from 'enzyme-adapter-react-16';
// import ReactDOM from 'react-dom';
// import configureMockStore from 'redux-mock-store';
// import { MemoryRouter } from 'react-router-dom';
// import thunk from 'redux-thunk';
// import { Provider } from 'react-redux';
// import React from 'react';

// import { Dashboard } from '../../_components/Dashboard';

// Enzyme.configure({ adapter: new Adapter() });

// describe('<Dashboard />', () => {
//   const store = configureMockStore([thunk])({
//     authentication: {},
//     categoryReducer: {
//       categories: [],
//     },
//     recipeReducer: {},
//   });

//   const props = {};
//   const preventDefault = jest.fn();
//   const component = mount(
//     <Provider store={store}>
//       <MemoryRouter>
//         <Dashboard {...props} />
//       </MemoryRouter>
//     </Provider>,
//   );
//   it('should render itself without crashing', () => {
//     const { enzymeWrapper } = render(
//       <Provider store={store}>
//         <MemoryRouter>
//           <Dashboard {...props} />
//         </MemoryRouter>
//       </Provider>,
//     );
//   });
//   it('should render form', () => {
//     expect(component.find('form').length).toBe(1);
//     expect(component.find('form').simulate('submit', { preventDefault }));
//     expect(preventDefault).toBeCalled();
//   });
//   it('should render form', () => {
//     expect(component).toHaveLength(1);
//   });
// });

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
