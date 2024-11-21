"use client";

import { forwardRef } from "react";
import TextField from "@mui/material/TextField";

const PhoneInputComp = (props: any, ref: any) => {
  return (
    <TextField
      {...props}
      inputRef={ref}
      fullWidth
      size="small"
      id="standard-basic"
      label="Mobile Phone"
      variant="standard"
      name="phone"
    />
  );
};
export default forwardRef(PhoneInputComp);
