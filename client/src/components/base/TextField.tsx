import React from "react";
import { TextField as MuiTextField } from "@mui/material";

type TextFieldPropType = {
  value?: string;
  name?: string;
  onChange?: () => {};
  disabled?: boolean;
  label?: string;
  width?: string;
  error?: boolean;
  size?: 'medium'
  | 'small',
  type?: string,
}

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
} : TextFieldPropType) => {
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
      InputProps={{
        "role": "mui-textfield"
      }}
    />
  );
};

export default TextField;
