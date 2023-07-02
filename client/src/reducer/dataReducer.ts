import {
  ActionWithNonPrimitivePayload,
  DefaultAction,
} from "../actions/dataActions";

export type dataReducerTypes = {
  plays: [];
  fields: [];
};

const INITIAL_STATE: dataReducerTypes = {
  plays: [],
  fields: [],
};

const dataReducer = (
  state = INITIAL_STATE,
  action: DefaultAction | ActionWithNonPrimitivePayload
) => {
  switch (action.type) {
    case "LOAD_PLAYS":
      return {
        ...state,
        plays: action.payload,
      };
    case "LOAD_DYNAMIC_FIELDS":
      return {
        ...state,
        fields: action.payload,
      };
    default:
      return state;
  }
};

export default dataReducer;
