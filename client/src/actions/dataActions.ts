export type DefaultAction = {
  type: "GET_PLAYS" | "GET_DYNAMIC_FIELDS";
};

export type ActionWithNonPrimitivePayload = {
  type: "LOAD_PLAYS" | "LOAD_DYNAMIC_FIELDS";
  payload: {}[];
};

export const getPlaysAction = () => ({
  type: "GET_PLAYS",
});

export const getFieldsAction = () => ({
  type: "GET_DYNAMIC_FIELDS",
});

export const loadPlaysAction = (arr: {}[]) => ({
  type: "LOAD_PLAYS",
  payload: arr,
});

export const loadFieldsAction = (arr: {}[]) => ({
  type: "LOAD_DYNAMIC_FIELDS",
  payload: arr,
});
