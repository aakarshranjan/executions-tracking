import * as React from "react";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";

export default function DatePickerValue({
  name,
  value,
  onChange,
  maxDate,
  minDate,
  disabled,
  label,
  width,
}) {
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DemoContainer components={["DatePicker", "DatePicker"]}>
        <DatePicker
          label={label}
          value={value}
          onChange={(newValue) => onChange(newValue, name)}
          maxDate={maxDate}
          minDate={minDate}
          disabled={disabled}
          sx={{ width: `${width}` }}
        />
      </DemoContainer>
    </LocalizationProvider>
  );
}
