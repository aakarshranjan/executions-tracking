import React from "react";
import { connect } from "react-redux";
import Box from "@mui/material/Box";
import BasicTabs from "../generic/Tabs";
import { drawerTabMap } from "../../utils/config";
import { appReducerStateType } from "../../reducer/appReducer";
import { Action, Dispatch } from "redux";
import { selectTabAction } from "../../actions/appActions";

const LandingWrapper = ({
  selectedDrawerId,
  selectedTabId,
  selectTabAction,
}: {
  selectedDrawerId: number;
  selectedTabId: number;
  selectTabAction: (tabId: number) => {};
}) => {
  const handleChange = (_e: React.SyntheticEvent, newValue: number) => {
    selectTabAction(newValue);
  };

  return (
    <Box sx={{ width: "100%", marginTop: "1vh" }}>
      <BasicTabs
        currentTabList={drawerTabMap[selectedDrawerId]}
        selectedDrawerId={selectedDrawerId}
        selectedTabId={selectedTabId}
        selectedNestedTabId={null}
        handleChange={handleChange}
      />
    </Box>
  );
};

const mapStateToProps = ({ app }: { app: appReducerStateType }) => ({
  selectedTabId: app.selectedTabId,
  selectedDrawerId: app.selectedDrawerItemId,
});

const mapDispatchToProps = (dispatch: Dispatch<Action>) => ({
  selectTabAction: (tabId: number) => dispatch(selectTabAction(tabId)),
});

export default connect(mapStateToProps, mapDispatchToProps)(LandingWrapper);
