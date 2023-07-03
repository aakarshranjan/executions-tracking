import React from "react";
import {
  Accordion as MuiAccordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

function Accordion({ element, text }) {
  return (
    <MuiAccordion sx={{ borderRadius: "0.6rem", boxShadow: "none" }}>
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        sx={{
          backgroundColor: "#D8D8D8 !important",
          borderRadius: "1vw !important",
          minHeight: "10px !important",
          height: "4vh !important",
        }}
      >
        <Typography sx={{ fontWeight: 600, color: "GrayText" }}>
          {text}
        </Typography>
      </AccordionSummary>
      <AccordionDetails>{element}</AccordionDetails>
    </MuiAccordion>
  );
}

export default Accordion;
