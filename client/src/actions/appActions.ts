export type DefaultAction = {
  type: "TOGGLE_DRAWER" | "TOGGLE_LOGIN_STATUS";
};

export type ActionWithPrimitivePayload = {
  type: "SELECT_DRAWER_ITEM" | "SELECT_TAB" | "SELECT_PLAYBOOK_TAB";
  payload: number;
};

export type ActionWithPayload = {
  type: "SELECT_DRAWER_ITEM";
  payload: number;
};

export const toggleDrawerAction = () => ({
  type: "TOGGLE_DRAWER",
});

export const selectDrawerItemAction = (id: number) => ({
  type: "SELECT_DRAWER_ITEM",
  payload: id,
});

export const selectTabAction = (id: number) => ({
  type: "SELECT_TAB",
  payload: id,
});

export const selectPlaybookTabAction = (id: number) => ({
  type: "SELECT_PLAYBOOK_TAB",
  payload: id,
});

export const toggleLoginStatusAction = () => ({
  type: "TOGGLE_LOGIN_STATUS",
});
