import {
  DefaultAction,
  ActionWithPrimitivePayload,
} from "../actions/appActions";

export type appReducerStateType = {
  isDrawerOpen: boolean;
  selectedDrawerItemId: number;
  selectedTabId: number;
  selectedPlaybookTabId: number;
  fsDialogDetails: {
    open: false;
    type: "";
  };
  dataModalDetails: {
    open: boolean;
    title: string;
    type: string;
    callback: () => void;
  };
  snackbarDetails: {
    open: boolean;
    message: string;
    severity: string;
    duration: number;
  };
  isDataLoading: boolean;
  isLandingLoad: boolean;
  isLoggedIn: boolean;
};

const INITIAL_STATE: appReducerStateType = {
  isDrawerOpen: false,
  selectedDrawerItemId: 2,
  selectedTabId: 0,
  selectedPlaybookTabId: 0,
  fsDialogDetails: {
    open: false,
    type: "",
  },
  dataModalDetails: {
    open: false,
    title: "",
    type: "",
    callback: null,
  },
  snackbarDetails: {
    open: false,
    message: "",
    severity: "",
    duration: 0,
  },
  isDataLoading: true,
  isLandingLoad: true,
  isLoggedIn: false,
};

const appReducer = (
  state = INITIAL_STATE,
  action: DefaultAction | ActionWithPrimitivePayload
) => {
  switch (action.type) {
    case "TOGGLE_DRAWER":
      return {
        ...state,
        isDrawerOpen: !state.isDrawerOpen,
      };
    case "SELECT_DRAWER_ITEM":
      return {
        ...state,
        selectedDrawerItemId: action.payload,
        selectedTabId: 0,
      };
    case "SELECT_TAB":
      return {
        ...state,
        selectedTabId: action.payload,
      };
    case "SELECT_PLAYBOOK_TAB":
      return {
        ...state,
        selectedPlaybookTabId: action.payload,
      };
    case "TOGGLE_LOGIN_STATUS":
      return {
        ...state,
        isLoggedIn: !state.isLoggedIn,
      };
    default:
      return state;
  }
};

export default appReducer;
