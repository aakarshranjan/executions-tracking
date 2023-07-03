import React from "react";
import { TextField as MuiTextField } from "@mui/material";

const TextField = ({
  value,
  name,
  onChange,
  disabled,
  label,
  width,
  error,
  size,
  type,
}) => {
  return (
    <MuiTextField
      name={name}
      fullWidth
      value={value}
      type={type}
      variant="standard"
      disabled={disabled}
      onChange={onChange}
      error={error}
      size={size}
      label={label}
      sx={{ width }}
    />
  );
};

export default TextField;
