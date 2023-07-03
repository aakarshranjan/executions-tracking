import React from "react";
import Link from "@mui/material/Link";
import LinkIcon from "@mui/icons-material/Link";

const UrlIcon = ({ value, ...props }) => {
  let urlRegex =
    /(\b(https?|ftp|file):\/\/[-A-Z0-9+&@#\/%?=|!:,.;]*[-A-Z0-9+&@#\/%=|])/gi;
  let link = value && urlRegex.test(value) ? { href: value } : null;
  return (
    <Link {...link} underline="none" target="_blank" rel="noopener">
      <LinkIcon
        {...props}
        sx={{
          color: link ? "action.primary" : "action.active",
          mr: 1,
          my: 1.6,
        }}
      />
    </Link>
  );
};

export default UrlIcon;
