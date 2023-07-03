import React from "react";
import { TextField, Autocomplete } from "@mui/material";

const Autocomplete1 = ({
  name,
  value,
  options = [],
  onChange,
  label,
  error,
  disabled,
  width,
}) => {
  const defaultProps = {
    options: options,
    getOptionLabel: (option: { id: number; displayName: string }) =>
      option.displayName || "",
  };
  return (
    <Autocomplete
      fullWidth
      {...defaultProps}
      disabled={disabled}
      disablePortal
      size="small"
      id={name}
      sx={{ width }}
      defaultValue={null}
      value={value}
      onChange={(e, newValue) => {
        onChange(name, newValue);
      }}
      renderInput={(params) => (
        <TextField
          fullWidth
          size="small"
          error={error}
          variant="standard"
          {...params}
          label={label}
        />
      )}
    />
  );
};

export default Autocomplete1;
