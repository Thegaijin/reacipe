import { registration } from '../../_reducers/registration.reducer';

describe('Auth reducers dont change state on', () => {
  it('maintains state', () => {
    expect(registration(undefined, { type: 'unexpected' })).toEqual([]);
  });
  it('maintains state on registration', () => {
    const data = {
      type: 'REGISTER_SUCCESS',
    };
    expect(registration(undefined, data)).toEqual({});
  });
});
