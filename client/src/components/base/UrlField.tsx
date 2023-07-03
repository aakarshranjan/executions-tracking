import React from "react";
import TextField from "@mui/material/TextField";

const UrlField = ({ name, value, disabled, onChange, label, error, width }) => {
  return (
    <TextField
      name={name}
      value={value}
      disabled={disabled}
      label={label}
      variant="standard"
      error={error}
      sx={{ width }}
      onChange={onChange}
    />
  );
};

export default UrlField;
