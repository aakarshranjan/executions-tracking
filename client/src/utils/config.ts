import Execute from "../components/views/scoring/execute/Execute";
import DataView from "../components/views/scoring/executions-view/DataView";
import Employee from "../components/views/admin/employee/Employee";
import Playbook from "../components/views/admin/playbook/Playbook";
import ErrorComp from "../components/generic/Error";
import { AdminPanelSettings, FactCheck } from "@mui/icons-material";

export const drawerItems = [
  {
    id: 1,
    text: "Admin",
    icon: AdminPanelSettings,
  },
  {
    id: 2,
    text: "Scoring",
    icon: FactCheck,
  },
];

export const adminTabsList = [
  {
    id: 0,
    text: "Employee",
  },
  {
    id: 1,
    text: "Playbook",
  },
];

export const scoringTabsList = [
  {
    id: 0,
    text: "Execute",
  },
  {
    id: 1,
    text: "View",
  },
];

export const drawerTabMap = {
  1: adminTabsList,
  2: scoringTabsList,
};

const scoringTabsContent = (tabId: number) => {
  switch (tabId) {
    case 0:
      return Execute;
    case 1:
      return DataView;
    default:
      return ErrorComp;
  }
};

const adminTabsContent = (tabId: number) => {
  switch (tabId) {
    case 0:
      return Employee;
    case 1:
      return Playbook;
    default:
      return ErrorComp;
  }
};

const drawerTabContentMap = {
  1: adminTabsContent,
  2: scoringTabsContent,
};

export const TabContent = (drawerId: number, tabId: number) =>
  drawerTabContentMap[drawerId](tabId);
