import { authentication } from '../../_reducers/authentication.reducer';

describe('Auth reducers dont change state on', () => {
  it('maintains state', () => {
    expect(authentication(undefined, { type: 'unexpected' })).toEqual([]);
  });
  it('maintains state on registration', () => {
    const data = {
      type: 'LOGIN_SUCCESS',
    };
    expect(authentication(undefined, data)).toEqual([]);
  });
});
