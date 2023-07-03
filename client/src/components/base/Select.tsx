import React from "react";
import {
  InputLabel,
  MenuItem,
  FormControl,
  Select as MuiSelect,
  IconButton,
  InputAdornment,
} from "@mui/material";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import ClearRoundedIcon from "@mui/icons-material/ClearRounded";

const Select = ({
  name,
  value,
  options,
  onChange,
  label,
  disabled,
  error,
  width,
  clearDisable,
}) => {
  const ITEM_HEIGHT = 48;
  const ITEM_PADDING_TOP = 8;
  const MenuProps = {
    PaperProps: {
      style: {
        maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
        background: "white",
      },
    },
  };

  const handleClearClick = (e) => {
    e.taregt.value = "";
    e.target.name = name;
    onChange(e);
  };

  return (
    <FormControl size="small" fullWidth variant="standard" error={error}>
      {label ? (
        <InputLabel
          size="small"
          variant="standard"
          sx={{ display: "flex", maxWidth: "700%" }}
        >
          {label}
        </InputLabel>
      ) : null}
      <MuiSelect
        value={value}
        name={name}
        disabled={disabled}
        size="small"
        onChange={onChange}
        MenuProps={MenuProps}
        IconComponent={(props) =>
          value && !clearDisable ? null : <ArrowDropDownIcon {...props} />
        }
        endAdornment={
          <InputAdornment position="end">
            <IconButton
              sx={{
                visibility:
                  value && !disabled && !clearDisable ? "visible" : "hidden",
                size: 1,
                display: value ? "" : "none",
                ".MuiSvgIcon-root": {
                  fontSize: "0.8em !important",
                },
              }}
              onClick={handleClearClick}
            >
              <ClearRoundedIcon />
            </IconButton>
          </InputAdornment>
        }
        sx={{
          display: "flex",
          width: `${width}`,
          input: { textAlign: "left" },
        }}
      >
        {options?.map(({ displayName, id, optionDisabled }, index) => (
          <MenuItem disabled={optionDisabled} key={index} value={id}>
            {displayName}
          </MenuItem>
        ))}
      </MuiSelect>
    </FormControl>
  );
};
