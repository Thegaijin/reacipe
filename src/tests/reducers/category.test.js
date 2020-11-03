import categories from '../../_reducers/category.reducer';

describe('Category reducers change state on', () => {
  it('maintains state on adding a category', () => {
    const data = {
      type: 'CREATE_CATEGORY_SUCCESS',
    };
    expect(categories(undefined, data)).toEqual([]);
  }),
  it('maintains state on viewing categories', () => {
    const data = {
      type: 'VIEW_ALL_CATEGORIES_SUCCESS',
      data: {
        categories: {
          categories: [
            {
              category_id: 79,
              category_name: 'Cood',
              created_by: 47,
              date_created: 'Thu, 15 Mar 2018 00:11:45 GMT',
              date_modified: 'Thu, 15 Mar 2018 00:11:45 GMT',
            },
          ],

          categoryPage: 1,
          categoryPages: 2,
          message: 'hi',
        },
      },
    };
    expect(categories(undefined, data)).toEqual({
      categories: {
        categories: [
          {
            category_id: 79,
            category_name: 'Cood',
            created_by: 47,
            date_created: 'Thu, 15 Mar 2018 00:11:45 GMT',
            date_modified: 'Thu, 15 Mar 2018 00:11:45 GMT',
          },
        ],
        categoryPage: 1,
        categoryPages: 2,
        message: 'hi',
      },
    });
  }),
  it('maintains state on editing a category', () => {
    const data = {
      type: 'EDIT_CATEGORY_SUCCESS',
    };
    expect(categories(undefined, data)).toEqual([]);
  }),
  it('maintains state on deleting a category', () => {
    const data = {
      type: 'DELETE_CATEGORY_SUCCESS',
    };
    expect(categories(undefined, data)).toEqual([]);
  }),
  it('unknown action', () => {
    const data = {
      type: 'unknown',
    };
    expect(categories(undefined, data)).toEqual([]);
  });
});
