import React from "react";
import { connect } from "react-redux";
import Box from "@mui/material/Box";
import BasicTabs from "../../../generic/Tabs";
import { appReducerStateType } from "../../../../reducer/appReducer";
import { Action, Dispatch } from "redux";
import { selectPlaybookTabAction } from "../../../../actions/appActions";
import { playbookTabsList } from "../../../../utils/config";

const Playbook = ({
  selectedPlaybookTabId,
  selectedTabId,
  selectedDrawerItemId,
  selectPlaybookTabAction,
}: {
  selectedPlaybookTabId: number;
  selectedTabId: number;
  selectedDrawerItemId: number;
  selectPlaybookTabAction: (tabId: number) => {};
}) => {
  const handleChange = (_e: React.SyntheticEvent, newValue: number) => {
    selectPlaybookTabAction(newValue);
  };
  return (
    <Box sx={{ width: "100%", marginTop: "1vh" }}>
      <BasicTabs
        currentTabList={playbookTabsList}
        selectedDrawerId={selectedDrawerItemId}
        selectedTabId={selectedTabId}
        selectedNestedTabId={selectedPlaybookTabId}
        handleChange={handleChange}
      />
    </Box>
  );
};

const mapStateToProps = ({ app }: { app: appReducerStateType }) => ({
  selectedPlaybookTabId: app.selectedPlaybookTabId,
  selectedDrawerItemId: app.selectedDrawerItemId,
  selectedTabId: app.selectedTabId,
});

const mapDispatchToProps = (dispatch: Dispatch<Action>) => ({
  selectPlaybookTabAction: (tabId: number) =>
    dispatch(selectPlaybookTabAction(tabId)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Playbook);
