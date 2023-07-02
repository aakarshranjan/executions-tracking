import React, { Dispatch } from "react";
import { connect } from "react-redux";
import Box, { BoxProps } from "@mui/material/Box";
import Login from "./components/views/Login";
import LandingWrapper from "./components/views/LandingWrapper";
import Drawer from "./components/generic/Drawer";
import { appReducerStateType } from "./reducer/appReducer";
import { initiateLoginEmployeeAction } from "./actions/appActions";
import { Action } from "redux";
import { styled } from "@mui/material/styles";

interface ContentProps extends BoxProps {
  open: boolean;
}

const Content = styled(Box, {
  shouldForwardProp: (prop) => prop !== "open",
})<ContentProps>(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(["width", "margin"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(!open && {
    [theme.breakpoints.only("sm")]: {
      marginLeft: theme.drawer.drawerClose["sm"],
    },
    [theme.breakpoints.only("lg")]: {
      marginLeft: theme.drawer.drawerClose["lg"],
    },
    [theme.breakpoints.only("md")]: {
      marginLeft: theme.drawer.drawerClose["md"],
    },
    [theme.breakpoints.only("xs")]: {
      marginLeft: theme.drawer.drawerClose["xs"],
    },
    [theme.breakpoints.only("xl")]: {
      marginLeft: theme.drawer.drawerClose["xl"],
    },
  }),
  ...(open && {
    [theme.breakpoints.only("sm")]: {
      marginLeft: theme.drawer.drawerOpen["sm"],
      width: `calc(100% - ${theme.drawer.drawerOpen["sm"]})`,
    },
    [theme.breakpoints.only("xs")]: {
      marginLeft: theme.drawer.drawerOpen["xs"],
      width: `calc(100% - ${theme.drawer.drawerOpen["xs"]})`,
    },
    [theme.breakpoints.only("md")]: {
      marginLeft: theme.drawer.drawerOpen["md"],
      width: `calc(100% - ${theme.drawer.drawerOpen["md"]})`,
    },
    [theme.breakpoints.only("lg")]: {
      marginLeft: theme.drawer.drawerOpen["lg"],
      width: `calc(100% - ${theme.drawer.drawerOpen["lg"]})`,
    },
    [theme.breakpoints.only("xl")]: {
      marginLeft: theme.drawer.drawerOpen["xl"],
      width: `calc(100% - ${theme.drawer.drawerOpen["xl"]})`,
    },
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const App = ({
  isLoggedIn,
  initiateLoginEmployeeAction,
  isDrawerOpen,
}: {
  isLoggedIn: boolean;
  initiateLoginEmployeeAction: () => {};
  isDrawerOpen: boolean;
}) => {
  return (
    <div>
      {!isLoggedIn ? (
        <Login initiateLoginEmployeeAction={initiateLoginEmployeeAction} />
      ) : (
        <React.Fragment>
          <Drawer />
          <Content open={isDrawerOpen}>
            <LandingWrapper />
          </Content>
        </React.Fragment>
      )}
    </div>
  );
};

const mapStateToProps = ({ app }: { app: appReducerStateType }) => ({
  isLoggedIn: app.isLoggedIn,
  isDrawerOpen: app.isDrawerOpen,
});

const mapDispatchToProps = (dispatch: Dispatch<Action>) => ({
  initiateLoginEmployeeAction: () => dispatch(initiateLoginEmployeeAction()),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
