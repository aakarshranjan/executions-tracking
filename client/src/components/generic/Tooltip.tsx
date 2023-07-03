import React from "react";
import {
  Tooltip as MuiTooltip,
  TooltipProps,
  tooltipClasses,
} from "@mui/material";
import { styled } from "@mui/material/styles";

const Tooltip = styled(({ className, ...props }: TooltipProps) => (
  <MuiTooltip
    {...props}
    classes={{ popper: className }}
    followCursor={true}
    placement="bottom-start"
  />
))(({ theme }) => ({
  [`& .${tooltipClasses.tooltip}`]: {
    backgroundColor: "#666666",
    color: "white",
    boxShadow: theme.shadows[1],
    fontSize: 12,
  },
}));

export default Tooltip;
