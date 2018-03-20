import Enzyme, { render, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import ReactDOM from 'react-dom';
import configureMockStore from 'redux-mock-store';
import { MemoryRouter } from 'react-router-dom';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import React from 'react';

import HomePage from '../../_components/HomePage';

Enzyme.configure({ adapter: new Adapter() });

describe('<HomePage />', () => {
  const store = configureMockStore([thunk])({
    categoryReducer: {},
  });
  //   const preventDefault = jest.fn();
  // const logout = jest.fn();
  const component = mount(
    <Provider store={store}>
      <MemoryRouter>
        <HomePage />
      </MemoryRouter>
    </Provider>,
  );
  it('should render itself without crashing', () => {
    const { enzymeWrapper } = render(
      <Provider store={store}>
        <MemoryRouter>
          <HomePage />
        </MemoryRouter>
      </Provider>,
    );
  });
});
