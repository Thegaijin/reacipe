import recipes from '../../_reducers/recipe.reducer';

describe('Recipe reducers change state on', () => {
  it('maintains state on adding a recipe', () => {
    const data = {
      type: 'CREATE_RECIPES_SUCCESS',
    };
    expect(recipes(undefined, data)).toEqual([]);
  }),
  it('maintains state on viewing categories', () => {
    const data = {
      type: 'VIEW_ALL_RECIPES_SUCCESS',
      data: {
        recipes: {
          recipes: [
            {
              recipe_id: 1,
              recipe_name: 'recipe',
              created_by: 1,
              date_created: 'Thu, 21 Mar 2018 01:28:45 GMT',
              date_modified: 'Thu, 21 Mar 2018 01:28:45 GMT',
            },
          ],
          recipePage: 1,
          recipePages: 2,
          message: 'hi',
        },
      },
    };
    expect(recipes(undefined, data)).toEqual({
      recipeReducer: {
        recipes: [
          {
            recipe_id: 1,
            recipe_name: 'recipe',
            created_by: 1,
            date_created: 'Thu, 21 Mar 2018 00:11:45 GMT',
            date_modified: 'Thu, 21 Mar 2018 00:11:45 GMT',
          },
        ],
        recipePage: 1,
        recipePages: 2,
        message: 'hi',
      },
    });
  }),
  it('maintains state on editing a category', () => {
    const data = {
      type: 'EDIT_RECIPE_SUCCESS',
    };
    expect(recipes(undefined, data)).toEqual([]);
  }),
  it('maintains state on deleting a category', () => {
    const data = {
      type: 'DELETE_CATEGORY_SUCCESS',
    };
    expect(recipes(undefined, data)).toEqual([]);
  }),
  it('unknown action', () => {
    const data = {
      type: 'unknown',
    };
    expect(recipes(undefined, data)).toEqual([]);
  });
});
