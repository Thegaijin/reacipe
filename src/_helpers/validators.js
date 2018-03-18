export const required = value => (value ? undefined : 'Required');
export const username = value =>
  (value && !/^[a-zA-Z_]+([a-zA-Z0-9]{1,10})$/i.test(value)
    ? `${value} is not a valid username. It should comprise of alphanumeric values & an underscore.`
    : undefined);
export const email = value =>
  (value && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)
    ? `${value} does not meet standard email conventions`
    : undefined);
// ^[a-zA-Z0-9_.]+@[a-zA-Z0-9]+\.[a-zA-Z0-9.]+$
export const password = value =>
  (value && !/^\w{6,25}$/i.test(value)
    ? 'Password can only comprise of alphanumeric values & an underscore and not more than 25 characters'
    : undefined);
export const categoryname = value =>
  (value && !/^[a-zA-Z\s]+$/i.test(value) ? `${value} is not a valid category name` : undefined);

export const recipename = value =>
  (value && !/^[a-zA-Z\s]+$/i.test(value) ? `${value} is not a valid recipe name` : undefined);
