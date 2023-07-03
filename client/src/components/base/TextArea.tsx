import React from "react";
import TextField from "@mui/material/TextField";

const TextArea = ({
  name,
  value,
  label,
  disabled,
  onChange,
  error,
  width,
  fullWidth,
}) => {
  return (
    <TextField
      name={name}
      value={value}
      label={label}
      disabled={disabled}
      fullWidth={fullWidth}
      onChange={onChange}
      error={error}
      multiline
      rows={4}
      sx={{ width: `${width}` }}
    />
  );
};

export default TextArea;
