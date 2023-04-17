import * as React from "react";
import { connect } from "react-redux";
import { styled, useTheme, Theme, CSSObject } from "@mui/material/styles";
import Box from "@mui/material/Box";
import MuiDrawer from "@mui/material/Drawer";
import MuiAppBar, { AppBarProps as MuiAppBarProps } from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import CssBaseline from "@mui/material/CssBaseline";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import Avatar from "@mui/material/Avatar";
import MenuIcon from "@mui/icons-material/Menu";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
import { drawerItems } from "../../utils/config";
import {
  toggleDrawerAction,
  selectDrawerItemAction,
} from "../../actions/appActions";
import { appReducerStateType } from "../../reducer/appReducer";
import { Action } from "redux";
import { Tooltip } from "@mui/material";
import { ThemeOptions } from "@mui/material/styles/createTheme";

function stringToColor(string: string) {
  let hash = 0;
  let i;

  /* eslint-disable no-bitwise */
  for (i = 0; i < string.length; i += 1) {
    hash = string.charCodeAt(i) + ((hash << 5) - hash);
  }

  let color = "#";

  for (i = 0; i < 3; i += 1) {
    const value = (hash >> (i * 8)) & 0xff;
    color += `00${value.toString(16)}`.slice(-2);
  }
  /* eslint-enable no-bitwise */

  return color;
}

function stringAvatar(name: string) {
  return {
    sx: {
      bgcolor: stringToColor(name),
    },
    children: `${name.split(" ")[0][0]}${name.split(" ")[1][0]}`,
  };
}

const openedMixin = (theme: ThemeOptions): CSSObject => ({
  [theme.breakpoints.only("md")]: {
    width: theme.drawer.drawerOpen["md"],
  },
  [theme.breakpoints.only("lg")]: {
    width: theme.drawer.drawerOpen["lg"],
  },
  [theme.breakpoints.only("xl")]: {
    width: theme.drawer.drawerOpen["xl"],
  },
  [theme.breakpoints.only("xs")]: {
    width: theme.drawer.drawerOpen["xs"],
  },
  [theme.breakpoints.only("sm")]: {
    width: theme.drawer.drawerOpen["sm"],
  },
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: "hidden",
});

const closedMixin = (theme: ThemeOptions): CSSObject => ({
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: "hidden",
  [theme.breakpoints.only("md")]: {
    width: theme.drawer.drawerClose["md"],
  },
  [theme.breakpoints.only("lg")]: {
    width: theme.drawer.drawerClose["lg"],
  },
  [theme.breakpoints.only("xl")]: {
    width: theme.drawer.drawerClose["xl"],
  },
  [theme.breakpoints.only("xs")]: {
    width: theme.drawer.drawerClose["xs"],
  },
  [theme.breakpoints.only("sm")]: {
    width: theme.drawer.drawerClose["sm"],
  },
});

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  [theme.breakpoints.only("md")]: {
    width: theme.drawer.drawerOpen["md"],
  },
  [theme.breakpoints.only("lg")]: {
    width: theme.drawer.drawerOpen["lg"],
  },
  [theme.breakpoints.only("xl")]: {
    width: theme.drawer.drawerOpen["xl"],
  },
  [theme.breakpoints.only("xs")]: {
    width: theme.drawer.drawerOpen["xs"],
  },
  [theme.breakpoints.only("sm")]: {
    width: theme.drawer.drawerOpen["sm"],
  },
  flexShrink: 0,
  whiteSpace: "nowrap",
  boxSizing: "border-box",
  ...(open && {
    ...openedMixin(theme),
    "& .MuiDrawer-paper": openedMixin(theme),
  }),
  ...(!open && {
    ...closedMixin(theme),
    "& .MuiDrawer-paper": closedMixin(theme),
  }),
}));

function MiniDrawer({
  isDrawerOpen,
  selectedDrawerItemId,
  toggleDrawerAction,
  selectDrawerItemAction,
}: {
  isDrawerOpen: boolean;
  selectedDrawerItemId: number;
  toggleDrawerAction: () => {};
  selectDrawerItemAction: (id: number) => {};
}) {
  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <Drawer variant="permanent" open={isDrawerOpen}>
        <DrawerHeader>
          {isDrawerOpen ? (
            <div>
              <Avatar
                {...stringAvatar("Aakarsh Sinha")}
                sx={{
                  width: "4vw",
                  height: "8vh",
                  marginBottom: "1vh",
                  marginLeft: "4vw",
                }}
              />
            </div>
          ) : (
            ""
          )}
          <IconButton onClick={toggleDrawerAction}>
            {isDrawerOpen ? <ChevronLeftIcon /> : <MenuIcon />}
          </IconButton>
        </DrawerHeader>
        <Divider />
        <List>
          {drawerItems.map(({ id, text, icon }) => {
            const DrawerIcon = icon;
            return (
              <ListItemButton
                key={id}
                selected={id == selectedDrawerItemId}
                onClick={() => selectDrawerItemAction(id)}
              >
                <Tooltip title={text}>
                  <ListItemIcon>{<DrawerIcon />}</ListItemIcon>
                </Tooltip>
                <ListItemText primary={text} />
              </ListItemButton>
            );
          })}
        </List>
      </Drawer>
    </Box>
  );
}

const mapStateToProps = ({ app }: { app: appReducerStateType }) => ({
  isDrawerOpen: app.isDrawerOpen,
  selectedDrawerItemId: app.selectedDrawerItemId,
});

const mapDispatchToProps = (dispatch: React.Dispatch<Action>) => ({
  toggleDrawerAction: () => dispatch(toggleDrawerAction()),
  selectDrawerItemAction: (id: number) => dispatch(selectDrawerItemAction(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(MiniDrawer);
