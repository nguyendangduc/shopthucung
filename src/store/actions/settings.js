export const USER_FETCH_REQUESTED = "USER_FETCH_REQUESTED";
export const USER_FETCH_SUCCEEDED = "USER_FETCH_SUCCEEDED";

export const CATEGORY_FETCH_REQUESTED = "CATEGORY_FETCH_REQUESTED";
export const CATEGORY_FETCH_SUCCEEDED = "CATEGORY_FETCH_SUCCEEDED";

export const getUsers = (input) => ({
  type: USER_FETCH_REQUESTED,
  input: input
});

export const getCategory = (input) => ({
  type: CATEGORY_FETCH_REQUESTED,
  input: input
});
