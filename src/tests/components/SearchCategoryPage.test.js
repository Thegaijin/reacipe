import Enzyme, { render, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import ReactDOM from 'react-dom';
import configureMockStore from 'redux-mock-store';
import { MemoryRouter } from 'react-router-dom';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import React from 'react';

import { SearchCategoryPage } from '../../_components/SearchCategoryPage';

Enzyme.configure({ adapter: new Adapter() });

describe('<SearchCategoryPag />', () => {
  const store = configureMockStore([thunk])({
    categoryReducer: {},
  });
  //   const props = {
  //     category_id: 1,
  //   };
  const preventDefault = jest.fn();
  const component = mount(
    <Provider store={store}>
      <MemoryRouter>
        <SearchCategoryPage />
      </MemoryRouter>
    </Provider>,
  );
  it('should render itself without crashing', () => {
    const { enzymeWrapper } = render(
      <Provider store={store}>
        <MemoryRouter>
          <SearchCategoryPage />
        </MemoryRouter>
      </Provider>,
    );
  });
  it('should render form', () => {
    expect(component.find('form').length).toBe(1);
    expect(component.find('form').simulate('submit', { preventDefault }));
    expect(preventDefault).toBeCalled();
  });
  it('should render form', () => {
    expect(component).toHaveLength(1);
  });
});
