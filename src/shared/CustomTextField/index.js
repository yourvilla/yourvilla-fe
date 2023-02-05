import React from "react";
import TextField from "@mui/material/TextField";
import classNames from "classnames";

export const CustomTextField = ({
  variant,
  placeholder,
  label,
  type,
  name,
  id,
  formik,
  className,
  multiline = false,
  rows = 1,
}) => {
  return (
    <>
      <TextField
        className={classNames(className)}
        label={label}
        type={type}
        placeholder={placeholder}
        name={name}
        size="small"
        id={id}
        color="success"
        rows={rows}
        multiline={multiline}
        variant={variant}
        autoComplete="off"
        value={formik.values[id]}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        error={formik.errors[id] && formik.touched[id] ? true : false}
        helperText={formik.touched[id] && formik.errors[id]}
      />
    </>
  );
};
