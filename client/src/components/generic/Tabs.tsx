import * as React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import { TabContent } from "../../utils/config";

function getComponent(
  tabId: number,
  drawerId: number,
  selectedNestedTabId: number
) {
  const Comp = TabContent(tabId, drawerId, selectedNestedTabId);
  return <Comp />;
}

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

export default function BasicTabs({
  currentTabList,
  selectedDrawerId,
  selectedTabId,
  selectedNestedTabId,
  handleChange,
}: {
  currentTabList: {
    id: number;
    text: string;
  }[];
  selectedDrawerId: number;
  selectedTabId: number;
  selectedNestedTabId: number;
  handleChange: (e: React.SyntheticEvent, value: number) => void;
}) {
  return (
    <Box sx={{ width: "100%" }}>
      <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
        <Tabs
          value={selectedNestedTabId ?? selectedTabId}
          onChange={handleChange}
        >
          {currentTabList.map((tab) => (
            <Tab
              key={tab.id}
              label={tab.text}
              sx={{ textTransform: "none", fontWeight: 700 }}
              {...a11yProps(tab.id)}
            />
          ))}
        </Tabs>
      </Box>
      {currentTabList.map((tab) => (
        <TabPanel key={tab.id} value={selectedTabId} index={tab.id}>
          {getComponent(selectedTabId, selectedDrawerId, selectedNestedTabId)}
        </TabPanel>
      ))}
    </Box>
  );
}
