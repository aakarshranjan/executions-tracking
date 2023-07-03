import React from "react";
import {
  InputLabel,
  MenuItem,
  FormControl,
  ListItemText,
  Select,
  Checkbox,
  TextField,
  IconButton,
} from "@mui/material";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import ClearRoundedIcon from "@mui/icons-material/ClearRounded";
import Tooltip from "../generic/Tooltip";

const ITEM_HEIGHT = 60;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
      background: "white",
    },
  },
};

function MultiSelect({
  name,
  values,
  onSearchFieldChangeHandler,
  data,
  label,
  width,
  error,
  disabled,
  clearDisable,
}) {
  const [finalName, setFinalName] = React.useState(data);
  const [showTooltip, setShowTooltip] = React.useState(false);

  const openCheckHandler = () => {
    if (!finalName.length) {
      setFinalName(data);
    }
    setShowTooltip(false);
  };

  React.useEffect(() => {
    setFinalName(data);
  }, [data]);

  const handleSearchFieldChange = (e) => {
    let searchVal = e.target.value;
    if (!searchVal) {
      setFinalName(data);
    } else {
      let searchRes = data.filter(({ displayName, id }) =>
        displayName.toLowerCase().startsWith(searchVal.toLowerCase())
          ? displayName
          : ""
      );
      setFinalName(searchRes);
    }
  };

  const handleClearClick = (e) => {
    e.target.value = [];
    e.target.name = name;
    onSearchFieldChangeHandler(e);
  };

  const selectedItems =
    values?.length && values[0]
      ? values.map((value) => value?.displayName.join(","))
      : "";

  return (
    <Tooltip title={selectedItems} open={showTooltip}>
      <FormControl
        fullWidth
        variant="standard"
        error={error}
        disabled={disabled}
      >
        <InputLabel size="small" sx={{ display: "flex" }}>
          {label}
        </InputLabel>
        <Select
          multiple
          size="small"
          sx={{
            display: "flex",
            width: `${width}`,
            input: { textAlign: "left" },
          }}
          IconComponent={(props) =>
            selectedItems.length ? (
              <IconButton
                sx={{
                  visibility:
                    selectedItems.length && !disabled && !clearDisable
                      ? "visible"
                      : "hidden",
                  display: selectedItems.length ? "" : "none",
                  ".MuiSvgIcon-root": {
                    fontSize: "0.8em !important",
                  },
                }}
                onClick={handleClearClick}
              >
                <ClearRoundedIcon />
              </IconButton>
            ) : (
              <ArrowDropDownIcon {...props} />
            )
          }
          value={values}
          name={name}
          variant="standard"
          onOpen={() => {
            openCheckHandler();
            setFinalName(data);
          }}
          onChange={onSearchFieldChangeHandler}
          onClose={() => setShowTooltip(false)}
          onMouseEnter={() => setShowTooltip(true)}
          onMouseLeave={() => setShowTooltip(false)}
          renderValue={(selected) => {
            let selectedLabels = selected?.map((s) => s?.displayName);
            return selectedLabels.join(", ");
          }}
          MenuProps={MenuProps}
          onKeyDownCapture={(e) => e.stopPropagation()}
        >
          <TextField
            fullWidth
            label="Search"
            type="search"
            variant="standard"
            size="small"
            sx={{ width: "90%", margin: "0 1vw" }}
            onChange={(e) => handleSearchFieldChange(e)}
          />
          {finalName?.map((ent) => (
            <MenuItem
              sx={{ padding: 0 }}
              key={ent.id}
              value={ent}
              onKeyDownCapture={(e) => e.stopPropagation()}
            >
              <Checkbox checked={values?.indexOf(ent) > -1} />
              <ListItemText
                primary={ent?.displayName}
                sx={{
                  ".MuiTypography-root": {
                    whiteSpace: "nowrap",
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                  },
                }}
              />
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </Tooltip>
  );
}

export default MultiSelect;
